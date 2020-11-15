<template>
  <v-container>
    <v-container>
      <v-row justify="center">
        <v-img
          src="../assets/logo-white.png"
          max-width="650"
          class="mb-5"
        />
      </v-row>
    </v-container>
    <v-row justify="center">
      <router-link
        to="/contest-gallery"
        class="text-decoration-none"
      >
        <v-btn
          x-large
          color="secondary"
        >
          Contest Gallery
        </v-btn>
      </router-link>
      <v-spacer />
      <router-link
        to="/about"
        class="text-decoration-none"
      >
        <v-btn
          x-large
          color="secondary"
        >
          About the Event
        </v-btn>
      </router-link>
      <v-spacer />
      <v-btn
        x-large
        color="secondary"
      >
        Games
      </v-btn>
      <v-spacer />
      <v-btn
        x-large
        color="secondary"
      >
        Leaderboard
      </v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useQuery, useSubscription } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default defineComponent({
  name: 'Home',
  setup() {
    const { result } = useQuery(
      gql`query MyQuery {
        users {
          name
          id
        }
      }`,
    );
    const result1 = useSubscription(
      gql`subscription MyQuery {
  users {
    name
    id
  }
}
`,
    );
    console.log(result, 'query');
    console.log(result1.result, 'websocket');
  },
});
</script>
