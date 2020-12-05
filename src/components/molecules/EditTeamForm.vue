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
          v-bind="attrs"
          v-on="on"
        >
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Team Score</span>
        </v-card-title>
        <v-card-text>
          <v-select
            v-model="updateData.participant_id"
            label="Participants"
            :items="participantsScores"
            item-text="name"
            item-value="id"
          />
          <v-select
            v-model="updateData.score"
            label="Score"
            :items="scoreOptions"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="secondary"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="editWrapper"
          >
            Confirm
          </v-btn>
        </v-card-actions>
        <LoaderSpinMini v-if="loading" />
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
import { defineComponent, ref, reactive } from '@vue/composition-api';
import { useUpdateParticipantsScoreMutation } from '@/generated/graphql';
import SnackBar from '@/components/atoms/Snackbars.vue';
import snackBarComposition from '@/composable/snackbar';
import LoaderSpinMini from '@/components/atoms/LoaderSpinMini.vue';

export default defineComponent({
  name: 'EditGameForm',

  components: {
    SnackBar,
    LoaderSpinMini,
  },
  props: {
    id: {
      type: String,
    },
    participantsScores: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const scoreOptions = ref([0, 250, 500, 750, 1000]);
    const dialog = ref(false);
    const loading = ref(false);

    const {
      timeout, snackbar, message, snackbarHandler,
    } = snackBarComposition();

    const { mutate: updateScore } = useUpdateParticipantsScoreMutation(() => ({}));

    const updateData = reactive({
      participant_id: '',
      score: 0,
    });

    function editWrapper() {
      loading.value = true;
      console.log('Data', updateData);
      updateScore(updateData).then((result) => {
        if (result.data.update_participants.affected_rows) {
          updateData.participant_id = '';
          updateData.score = 0;
          snackbarHandler('Update Successfully!');
        } else {
          snackbarHandler('Error! Try again later.');
        }
        loading.value = false;
        dialog.value = false;
      }).catch((err) => {
        loading.value = false;
        console.error(err);
        snackbarHandler('Error! Try again later!');
      });
    }

    return {
      dialog,
      loading,
      editWrapper,
      scoreOptions,
      updateData,
      timeout,
      message,
      snackbar,
    };
  },
});
</script>
