<template>
  <v-container>
    <LoaderSpin v-if="loading || loading1" />
    <p v-else-if="error || error1">Error {{ error }}</p>
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
      <v-row>
        <TeamCard
          v-for="(team, index) in teams"
          :key="index"
          :team="team"
        />
      </v-row>
      <div class="my-5">
        <h1 class="text-center">Main Control</h1>
      </div>
      <v-row justify="center">
        <ContestControlButton />
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api';
import GameCard from '@/components/organisms/GameCard.vue';
import TeamCard from '@/components/organisms/TeamCard.vue';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';
import { useSubscibeToAllGamesSubscription, useGetParticipantsScoreSubscription } from '@/generated/graphql';
import ContestControlButton from '@/components/atoms/ContestControlButton.vue';

export default defineComponent({
  name: 'Admin',

  components: {
    GameCard,
    TeamCard,
    LoaderSpin,
    ContestControlButton,
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

    return {
      games,
      loading,
      error,
      teams,
      loading1,
      error1,
    };
  },
});
</script>
