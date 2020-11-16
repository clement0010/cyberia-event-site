<template>
  <v-container>
    <v-container>
      <v-row justify="center">
        <v-img
          src="../assets/logo-white.png"
          :max-width="$vuetify.breakpoint.xsAndDown ? '100vw' : $vuetify.breakpoint.mdAndDown ? '65vw' : '45vw'"
          class="mb-5"
        />
      </v-row>
    </v-container>
    <v-row justify="center">
      <div class="mx-10 my-5">
        <router-link
          to="/contest-gallery"
          class="text-decoration-none"
        >
          <v-btn
            :x-large="$vuetify.breakpoint.smAndUp"
            color="secondary"
          >
            Contest Gallery
          </v-btn>
        </router-link>
      </div>
      <div class="mx-10 my-5">
        <router-link
          to="/about"
          class="text-decoration-none"
        >
          <v-btn
            :x-large="$vuetify.breakpoint.smAndUp"
            color="secondary"
          >
            About the Event
          </v-btn>
        </router-link>
      </div>
      <div class="mx-10 my-5">
        <v-btn
          :x-large="$vuetify.breakpoint.smAndUp"
          color="secondary"
        >
          Games
        </v-btn>
      </div>
      <div class="mx-10 my-5">
        <router-link
          to="/leaderboard"
          class="text-decoration-none"
        >
          <v-btn
            :x-large="$vuetify.breakpoint.smAndUp"
            color="secondary"
          >
            Leaderboard
          </v-btn>
        </router-link>
      </div>
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
