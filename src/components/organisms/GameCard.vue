<template>
  <v-col
    cols="12"
    sm="4"
    md="3"
  >
    <v-card>
      <v-card-title>
        {{ game.game_name }}
      </v-card-title>
      <v-card-text>
        Top 3<br>
        <div
          v-for="n in Math.min(game.teams_scores.length, 3)"
          :key="n"
          class="px-3"
        >
          <v-row>
            {{ game.teams_scores[n - 1].team.name }}
            <v-spacer />
            {{ game.teams_scores[n - 1].score }}
          </v-row>
          <v-divider />
        </div>
      </v-card-text>
      <v-card-actions>
        <edit-game-form :teams-scores="game.teams_scores" />
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import EditGameForm from '@/components/molecules/EditGameForm.vue';

export default defineComponent({
  name: 'GameCard',
  components: {
    EditGameForm,
  },
  props: {
    game: {
      type: Object,
      default: () => ({
        game_name: 'Game',
        teams_scores: [],
      }),
    },
  },
});
</script>
