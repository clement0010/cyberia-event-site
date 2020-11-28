<template>
  <v-container>
    <LoaderSpin v-if="loading" />
    <p v-else-if="error">Error {{ error }}</p>
    <div v-else>
      <div class="my-5">
        <h1 class="text-center">Games</h1>
      </div>
      <v-row>
        <game-card
          v-for="n in games.length"
          :key="n"
          :game="games[n - 1]"
        />
      </v-row>
      <div class="my-5">
        <h1 class="text-center">Contest</h1>
      </div>
      <v-row justify="center">
        <v-btn
          color="secondary"
          dark
          large
        >
          Open Submissions
        </v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import GameCard from '@/components/organisms/GameCard.vue';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';
import { useGetAllGamesQuery } from '@/generated/graphql';
import { useResult } from '@vue/apollo-composable';

export default defineComponent({
  name: 'Admin',

  components: {
    GameCard,
    LoaderSpin,
  },

  setup() {
    const { result, loading, error } = useGetAllGamesQuery();
    const games = useResult(result, null, (data) => data.games);
    return {
      games,
      loading,
      error,
    };
  },
});
</script>
