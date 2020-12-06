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
        Scores<br>
        <div
          v-for="(team, index) in game.teams_scores"
          :key="index"
          class="px-3"
        >
          <v-row>
            {{ team.team.name }}
            <v-spacer />
            {{ team.score }}
          </v-row>
          <v-divider />
        </div>
      </v-card-text>
      <v-card-actions>
        <edit-game-form
          :id="game.id"
          :teams-scores="game.teams_scores"
        />
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
        id: '3b48e7d9-50ef-41c6-a0be-d1e72975e17c',
        game_name: 'Game',
        teams_scores: [{
          score: 3000,
          team_id: 'c15a5929-0564-4e24-8811-930ab511408c',
          team: {
            name: 'TEAM1',
          },
        }],
      }),
    },
  },
});
</script>
