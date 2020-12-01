<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          dark
          large
          v-bind="attrs"
          v-on="on"
        >
          Add Submission
        </v-btn>

      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Submission</span>
        </v-card-title>
        <v-card-text>
          <v-file-input
            placeholder="Upload file"
            name="imageFileSubmission"
            show-size
            accept="image/*"
            @change="selectFile"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            type="submit"
            color="primary"
            @click="upload"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <SnackBar
      :text="message"
      :timeout="timeout"
      :snackbar="snackbar"
    />
  </v-row>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api';
import uploadService from '@/services/submissionService';
import SnackBar from '@/components/atoms/Snackbars.vue';
import snackBarComposition from '@/composable/snackbar';
import { useSubmitContestMutation, GetParticipantVotingDetailsDocument } from '@/generated/graphql';
import { useApolloClient } from '@vue/apollo-composable';
import CacheService from '@/services/cacheService';

export default defineComponent({
  name: 'ContestSubmissionForm',

  components: {
    SnackBar,
  },

  props: {
    participantId: {
      type: String,
    },
  },

  setup(props) {
    const dialog = ref(false);
    const { resolveClient } = useApolloClient();
    const client = resolveClient();

    const {
      timeout, snackbar, message, snackbarHandler,
    } = snackBarComposition();

    const currentFile = ref();
    const submissionData = reactive({
      submission_url: '',
      participant_id: props.participantId,
    });
    function selectFile(file: Blob) {
      console.log('Selected File: ', file);
      currentFile.value = file;
    }

    const { mutate: submitContest } = useSubmitContestMutation(() => ({}));

    function submissionWrapper(imageUrl: string) {
      submissionData.participant_id = props.participantId;
      submissionData.submission_url = imageUrl;
      console.log(submissionData);
      submitContest(submissionData).then((result) => {
        if (result.data.insert_contest.affected_rows) {
          const cache = new CacheService(client);

          const { participants } = cache.read(GetParticipantVotingDetailsDocument, {});
          participants[0].submission = true;
          cache.write(GetParticipantVotingDetailsDocument, { participants });
        } else {
          throw new Error('Submission Server Error');
        }
      }).catch((err) => {
        console.error(err);
        snackbarHandler('Error! Try again later!');
      });
    }

    async function upload() {
      if (!currentFile.value) {
        snackbarHandler('Please select a file!');
        return;
      } if (currentFile.value.size > 1000000) {
        snackbarHandler('Please compress your file!');
        return;
      }

      try {
        // Need to standardize and pass token in
        const { data, status } = await uploadService(currentFile.value, 'auth0|12345678910');
        if (status === 200) {
          submissionWrapper(data.imageURL);
          snackbarHandler('Update Successfully!');

          // UX Improvement =========================================
          setTimeout(() => {
            dialog.value = false;
          }, 500);
          return;
        }
        throw new Error('Submission Server Error');
      } catch (error) {
        snackbarHandler('Something is wrong. Please try again later.');
        console.error('ERROR: ', error);
      }
    }

    return {
      dialog,
      upload,
      selectFile,
      currentFile,
      snackbar,
      timeout,
      message,

    };
  },
});
</script>
