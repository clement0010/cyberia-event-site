<template>
  <v-container>
    <div class="my-5">
      <h1 class="text-center">Games</h1>
    </div>
    <v-row>
      <game-card
        v-for="n in 9"
        :key="n"
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
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import GameCard from '@/components/organisms/GameCard.vue';

export default defineComponent({
  name: 'Admin',
  components: {
    GameCard,
  },
});
</script>
