<template>
  <v-row justify="center">
    <LoaderSpin v-if="loading" />
    <div v-else>
      <v-btn
        v-if="!stateControl.submission"
        color="secondary"
        dark
        large
        @click="contestControl(true, false)"
      >
        Open Submissions
      </v-btn>
      <v-btn
        v-else
        color="secondary"
        dark
        large
        @click="contestControl(false, false)"
      >
        Close Submissions
      </v-btn>

    </div>
    <div>
      <v-btn
        v-if="!stateControl.vote"
        color="secondary"
        dark
        large
        @click="contestControl(false, true)"
      >
        Open Voting
      </v-btn>
      <v-btn
        v-else
        color="secondary"
        dark
        large
        @click="contestControl(false, false)"
      >
        Close Voting
      </v-btn>

    </div>
    <div>
      <v-btn
        v-if="!stateControl.leaderboard"
        color="secondary"
        dark
        large
        @click="leaderboardControl(true)"
      >
        Open Leaderboard
      </v-btn>
      <v-btn
        v-else
        color="secondary"
        dark
        large
        @click="leaderboardControl(false)"
      >
        Close Leaderboard
      </v-btn>

    </div>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useGetControlStateQuery, useUpdateContestStateMutation, useUpdateLeadershipboardStateMutation } from '@/generated/graphql';
import { useResult } from '@vue/apollo-composable';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';

export default defineComponent({
  components: {
    LoaderSpin,
  },
  setup() {
    const {
      result, loading, error, refetch,
    } = useGetControlStateQuery({
      notifyOnNetworkStatusChange: true,
    });
    const stateControl = useResult(result, [
      {
        vote: false,
        submission: false,
        leaderboard: true,
      },
    ], (data) => data.control[0]);

    const { mutate: updateContestState } = useUpdateContestStateMutation({});

    function contestControl(submission: boolean, vote: boolean) {
      updateContestState({
        submission,
        vote,
      }).then((res) => {
        if (res.data.update_control.affected_rows) {
          refetch();
        }
      });
      console.log('Submission', submission, 'vote', vote);
    }

    const { mutate: updateLeadershipboardState } = useUpdateLeadershipboardStateMutation({});
    function leaderboardControl(leaderboard: boolean) {
      updateLeadershipboardState({
        leaderboard,
      }).then((res) => {
        if (res.data.update_control.affected_rows) {
          refetch();
        }
      });
      console.log('leaderboard', leaderboard);
    }

    return {
      stateControl,
      loading,
      error,
      contestControl,
      leaderboardControl,
    };
  },
});
</script>
