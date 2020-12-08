<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="black--text"
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
            class="black--text"
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

  setup(props, { root }) {
    const dialog = ref(false);
    const { resolveClient } = useApolloClient();
    const client = resolveClient();

    const {
      timeout, snackbar, message, snackbarHandler,
    } = snackBarComposition();

    const currentFile = ref();
    const imageName = ref('');
    const submissionData = reactive({
      submission_url: '',
      participant_id: props.participantId,
      auth0_id: root.$auth.user?.sub || '',
    });
    function selectFile(file: File) {
      console.log('Selected File: ', file);
      imageName.value = file.name;
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

          const { participants } = cache.read(GetParticipantVotingDetailsDocument, { auth0_id: root.$auth.user?.sub });
          participants[0].submission = false;
          cache.write(GetParticipantVotingDetailsDocument, { participants });
        } else {
          throw new Error('Submission Server Error');
        }
      })
        .catch((err) => {
          console.error(err);
          snackbarHandler('Error! Try again later!');
        });
    }

    async function upload() {
      if (!currentFile.value) {
        snackbarHandler('Please select a file!');
        return;
      }
      if (imageName.value.indexOf(' ') >= 0) {
        snackbarHandler('Please name your file correctly!');
        return;
      }
      if (currentFile.value.size > 1000000) {
        snackbarHandler('Please compress your file!');
        return;
      }

      try {
        console.log('Uploading.....');
        const { status } = await uploadService(currentFile.value);
        if (status === 200) {
          submissionWrapper(`https://storage.googleapis.com/contest-submission/${imageName.value}`);
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
