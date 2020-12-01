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
          v-for="(game, index) in games"
          :key="index"
          :game="game"
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
        <v-btn
          color="secondary"
          dark
          large
        >
          Open Voting
        </v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api';
import GameCard from '@/components/organisms/GameCard.vue';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';
import { useSubscibeToAllGamesSubscription } from '@/generated/graphql';

export default defineComponent({
  name: 'Admin',

  components: {
    GameCard,
    LoaderSpin,
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

    return {
      games,
      loading,
      error,
    };
  },
});
</script>
