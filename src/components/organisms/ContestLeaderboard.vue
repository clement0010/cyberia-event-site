<template>
  <v-container class="pt-10">
    <div class="mb-10">
      <h1 class="text-center">Contest Leaderboard</h1>
    </div>
    <v-row justify="center">
      <v-layout child-flex>
        <v-data-table
          :headers="headers"
          :items="participants"
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
                  :src="item.picture_url"
                  :max-width="$vuetify.breakpoint.xs ? 25 : 50"
                />
                </v-avatar>
              </div>
              {{ item.name }}
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
  name: 'ContestLeaderboard',

  components: {
  },

  data() {
    return {
      headers: [
        {
          text: 'Participant',
          align: 'start',
          value: 'name',
        },
        { text: 'Score', value: 'score' },
      ],
    };
  },

  props: {
    participants: {
      type: Array,
      default: () => [{
        name: 'Roger',
        picture_url: 'https://picsum.photos/50',
        score: '20',
      },
      {
        name: 'HUMAN2077',
        picture_url: 'https://picsum.photos/50',
        score: '19',
      },
      {
        name: 'Tan Ah Beng',
        picture_url: 'https://picsum.photos/50',
        score: '43',
      },
      ],
    },
  },
});
</script>
