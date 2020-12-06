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
          <template v-slot:body="{items, headers}">
            <tbody
              is="transition-group"
              v-if="items.length > 0"
              name="list"
            >
              <tr
                v-for="item in items"
                :key="item.name"
                class="item-row"
              >
                <td
                  class="mx-5 my-5"
                >
                  <v-avatar
                    :size="$vuetify.breakpoint.xs ? 25 : 50"
                  >
                    <v-img
                      :src="item.picture_url"
                      :max-width="$vuetify.breakpoint.xs ? 25 : 50"
                    />
                  </v-avatar>
                  {{ item.name }}
                </td>
                <td>{{ item.score }}</td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td
                  :colspan="headers.length"
                  style="text-align: center"
                >No Results Here!</td>
              </tr>
            </tbody>
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
        score: 0,
        name: 'Team Black',
        picture_url: 'https://storage.googleapis.com/contest-submission/black.png',
      },
      {
        score: 0,
        name: 'Team Red',
        picture_url: 'https://storage.googleapis.com/contest-submission/red.png',
      },
      {
        score: 0,
        name: 'Team White',
        picture_url: 'https://storage.googleapis.com/contest-submission/white.png',
      },
      {
        score: 0,
        name: 'Team Yellow',
        picture_url: 'https://storage.googleapis.com/contest-submission/yellow.png',
      },
      {
        score: 0,
        name: 'Team Green',
        picture_url: 'https://storage.googleapis.com/contest-submission/green.png',
      },
      {
        score: 0,
        name: 'Team Blue',
        picture_url: 'https://storage.googleapis.com/contest-submission/blue.png',
      },
      ],
    },
  },
});
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.8s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.list-move {
  transition: transform 0.5s;
}
.item-row {
  display: table-row;
}
</style>
