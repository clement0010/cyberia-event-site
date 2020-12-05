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
        >
          <template v-slot:item.name="{ item }">
            <v-row align="center">
              <div class="mx-5 my-5">
                <v-avatar :size="$vuetify.breakpoint.xs ? 25 : 50">
                <v-img
                  :src="item.team_name.picture_url"
                  :max-width="$vuetify.breakpoint.xs ? 25 : 50"
                />
                </v-avatar>
              </div>
              {{ item.team_name.name }}
            </v-row>
          </template>
        </v-data-table>
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
        team_name: {
          name: 'Team A',
          picture_url: 'https://picsum.photos/50',
        },
        score: '250',
      },
      {
        team_name: {
          name: 'Team B',
          picture_url: 'https://picsum.photos/50',
        },
        score: '850',
      },
      {
        team_name: {
          name: 'Team C',
          picture_url: 'https://picsum.photos/50',
        },
        score: '550',
      },
      ],
    },
  },
});
</script>
