<template>
  <div>
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="black--text"
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Vote
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Vote</span>
        </v-card-title>
        <v-card-text>
          Do you want to vote for this submission? This action is irreversible.
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
            @click="vote"
          >
            Vote
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <SnackBar
      :text="message"
      :timeout="timeout"
      :snackbar="snackbar"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import SnackBar from '@/components/atoms/Snackbars.vue';
import snackBarComposition from '@/composable/snackbar';
import { useSubmitContestVoteMutation, GetParticipantVotingDetailsDocument } from '@/generated/graphql';
import { useApolloClient } from '@vue/apollo-composable';
import CacheService from '@/services/cacheService';

export default defineComponent({
  name: 'SubmissionVote',

  components: {
    SnackBar,
  },
  props: {
    contestantId: {
      type: String,
    },
  },

  setup(props, { root }) {
    const dialog = ref(false);
    const {
      timeout, snackbar, message, snackbarHandler,
    } = snackBarComposition();

    const { resolveClient } = useApolloClient();
    const client = resolveClient();

    const { mutate: submitContestVote } = useSubmitContestVoteMutation(() => ({}));

    function vote() {
      console.log(props.contestantId, 'Voted contestant id');
      submitContestVote({
        participant_id: props.contestantId,
        auth0_id: root.$auth.user?.sub || '',
      }).then((result) => {
        console.log(result);
        if (result.data.update_contest.affected_rows) {
          const cache = new CacheService(client);

          const { participants } = cache.read(GetParticipantVotingDetailsDocument, { auth0_id: root.$auth.user?.sub });
          participants[0].vote = false;
          cache.write(GetParticipantVotingDetailsDocument, { participants });
        } else {
          snackbarHandler('You can only vote once!');
          throw new Error('Voting Error');
        }
      }).catch((err) => {
        console.error(err);
        snackbarHandler('Error! Try again later!');
      });

      // Optimise for UX ===========================
      snackbarHandler('Voted Successfully!');
      dialog.value = false;
    }

    return {
      vote,
      dialog,
      snackbar,
      timeout,
      message,
    };
  },
});
</script>
