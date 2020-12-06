<template>
  <v-container>
    <LoaderSpin v-if="loading || loading1" />
    <p v-if="error">Error! {{ process.env.NODE_ENV === 'production' ? 'Something is wrong, please refresh!' : error }}</p>
    <div v-else>
      <div class="my-5">
        <h1 class="text-center">Games</h1>
      </div>
      <v-row>
        <GameCard
          v-for="(game, index) in games"
          :key="index"
          :game="game"
        />
      </v-row>
      <div class="my-5">
        <h1 class="text-center">Participants</h1>
      </div>
      <v-row>
        <TeamCard
          v-for="(team, index) in teams"
          :key="index"
          :team="team"
        />
      </v-row>
      <div class="my-5">
        <h1 class="text-center">Emergency Meetings</h1>
      </div>
      <v-row>
        <AdminEmergencyMeetingCard
          v-for="(team, index) in emergencyMeetingStatus"
          :key="index"
          :team="team"
        />
      </v-row>
      <div class="my-5">
        <h1 class="text-center">Picometer</h1>
      </div>
      <v-row>
        <ArtifactCard
          v-for="(team, index) in picometer"
          :key="index"
          :team="team"
          :type="'picometer'"
        />
      </v-row>
      <div class="my-5">
        <h1 class="text-center">Viewfinder</h1>
      </div>
      <v-row>
        <ArtifactCard
          v-for="(team, index) in viewfinder"
          :key="index"
          :team="team"
          :type="'viewfinder'"
        />
      </v-row>
      <div class="my-5">
        <h1 class="text-center">Main Control</h1>
      </div>
      <v-row justify="center">
        <ContestControlButton />
      </v-row>
      <ContestLeaderboard :participants="contestLeaderboard" />
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api';
import GameCard from '@/components/organisms/GameCard.vue';
import TeamCard from '@/components/organisms/TeamCard.vue';
import ArtifactCard from '@/components/organisms/ArtifactCard.vue';
import AdminEmergencyMeetingCard from '@/components/organisms/AdminEmergencyMeetingCard.vue';
import ContestLeaderboard from '@/components/organisms/ContestLeaderboard.vue';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';
import {
  useSubscibeToAllGamesSubscription, useGetParticipantsScoreSubscription, useGetParticipantsPicometerDetailsSubscription, useGetParticipantsViewfinderDetailsSubscription,
  useGetEmergencyMeetingStatusSubscription, useContestSubmissionLiveResultSubscription,
} from '@/generated/graphql';
import ContestControlButton from '@/components/atoms/ContestControlButton.vue';

export default defineComponent({
  name: 'Admin',

  components: {
    GameCard,
    TeamCard,
    LoaderSpin,
    ContestControlButton,
    ArtifactCard,
    AdminEmergencyMeetingCard,
    ContestLeaderboard,
  },

  setup() {
    const { result, loading, error } = useSubscibeToAllGamesSubscription();
    const games = ref();
    watch(
      result,
      (data) => {
        games.value = data.games;
      },
    );
    const { result: result1, loading: loading1, error: error1 } = useGetParticipantsScoreSubscription();
    const teams = ref();
    watch(
      result1,
      (data) => {
        teams.value = data.teams;
      },
    );
    const { result: result2, loading: loading2, error: error2 } = useGetParticipantsPicometerDetailsSubscription();
    const picometer = ref();
    watch(
      result2,
      (data) => {
        picometer.value = data.teams;
      },
    );
    const { result: result3, loading: loading3, error: error3 } = useGetParticipantsViewfinderDetailsSubscription();
    const viewfinder = ref();
    watch(
      result3,
      (data) => {
        viewfinder.value = data.teams;
      },
    );
    const { result: result4, loading: loading4, error: error4 } = useGetEmergencyMeetingStatusSubscription();
    const emergencyMeetingStatus = ref();
    watch(
      result4,
      (data) => {
        emergencyMeetingStatus.value = data.teams;
      },
    );

    const { result: result5, loading: loading5, error: error5 } = useContestSubmissionLiveResultSubscription();
    const contestLeaderboard = ref();
    watch(
      result5,
      (data) => {
        contestLeaderboard.value = data.participants;
      },
    );

    return {
      games,
      picometer,
      viewfinder,
      emergencyMeetingStatus,
      contestLeaderboard,
      teams,
      loading,
      loading1,
      error,
      error1,
    };
  },
});
</script>
