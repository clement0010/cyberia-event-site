<template>
  <v-container class="pt-10">
    <div class="mb-10">
      <h1 class="text-center">Leaderboard</h1>
    </div>
    <v-row justify="center">
      <v-layout child-flex>
        <v-data-table
          :headers="headers"
          :items="teams"
          item-key="name"
          sort-by="score"
          sort-desc
          hide-default-footer
        />
      </v-layout>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'LeaderboardSection',

  components: {
  },

  data() {
    return {
      headers: [
        {
          text: 'Team',
          align: 'start',
          value: 'name',
        },
        { text: 'Score', value: 'score' },
      ],
    };
  },

  props: {
    teams: {
      type: Array,
      default: () => [{
        name: 'Team A',
        score: '250',
      },
      {
        name: 'Team B',
        score: '850',
      },
      {
        name: 'Team C',
        score: '550',
      },
      ],
    },
  },
});
</script>
