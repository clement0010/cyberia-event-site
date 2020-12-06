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
          v-bind="attrs"
          v-on="on"
        >
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Game</span>
        </v-card-title>
        <v-card-text>
          <v-select
            v-model="updateData.team_id"
            label="Team"
            :items="teamsScores"
            item-text="team.name"
            item-value="team_id"
            color="white"
          />
          <v-select
            v-model="updateData.score"
            label="Score"
            :items="scoreOptions"
            color="white"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            class="black--text"
            color="secondary"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            class="black--text"
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
import { useUpdateGameScoreMutation } from '@/generated/graphql';
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
    teamsScores: {
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

    const { mutate: updateScore } = useUpdateGameScoreMutation(() => ({}));

    const updateData = reactive({
      game_id: props.id || '',
      team_id: '',
      score: 0,
    });

    function editWrapper() {
      loading.value = true;
      console.log('Data', updateData);
      updateScore(updateData).then((result) => {
        if (result.data.update_teams_scores.affected_rows) {
          updateData.team_id = '';
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
