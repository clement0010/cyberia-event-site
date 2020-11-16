<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-toolbar-title>
          Cyberia 2020 Site
        </v-toolbar-title>
      </div>

      <v-spacer />

      <router-link
        to="/"
        class="text-decoration-none"
      >
        <v-btn class="mx-1">
          Home
        </v-btn>
      </router-link>
      <router-link
        to="/profile"
        class="text-decoration-none"
      >
        <v-btn class="mx-1">
          Profile
        </v-btn>
      </router-link>
      <router-link
        to="/"
        class="text-decoration-none"
      >
        <v-btn class="mx-1">
          Login
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'NavBarWeb',

  components: {
  },

  data: () => ({
    drawer: false,
  }),
});
</script>
