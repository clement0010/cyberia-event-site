<template>
  <div>
    <v-app-bar
      app
      height="75"
      color="#dadada"
      dark
    >
      <div class="d-flex align-center">
        <v-toolbar-title class="black--text cyberia">
          CYBERIA
        </v-toolbar-title>
      </div>

      <v-spacer />

      <router-link
        to="/"
        class="text-decoration-none"
      >
        <v-btn
          class="mx-1"
        >
          Home
        </v-btn>
      </router-link>
      <router-link
        v-if="role === 'admin'"
        to="/admin"
        class="text-decoration-none"
      >
        <v-btn
          class="mx-1"
        >
          Admin
        </v-btn>
      </router-link>
      <router-link
        v-else
        to="/profile"
        class="text-decoration-none"
      >
        <v-btn
          class="mx-1"
        >
          Profile
        </v-btn>
      </router-link>
      <router-link
        to="/"
        class="text-decoration-none"
      >
        <v-btn
          v-if="!isAuthenticated"
          class="mx-1"
          @click="login"
        >
          Login
        </v-btn>
        <v-btn
          v-else
          class="mx-1"
          @click="logout"
        >
          Logout
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import authComposition from '@/composable/authHandler';

export default defineComponent({
  name: 'NavBarWeb',

  components: {
  },

  data: () => ({
    drawer: false,
  }),

  setup(props, { root }) {
    const {
      login, logout, isAuthenticated, role,
    } = authComposition(root);

    return {
      login,
      logout,
      role,
      isAuthenticated,
    };
  },
});
</script>

<style scoped>
.cyberia{
  font-weight: bolder;
  letter-spacing: 0.2em;
}
</style>
