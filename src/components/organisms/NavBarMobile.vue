<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <router-link
            to="/"
            class="text-decoration-none"
          >
            <v-list-item>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link
            v-if="role==='admin'"
            to="/admin"
            class="text-decoration-none"
          >
            <v-list-item>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link
            v-else
            to="/profile"
            class="text-decoration-none"
          >
            <v-list-item>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
          </router-link>

          <v-list-item>
            <v-list-item-title
              v-if="!isAuthenticated"
              @click="login"
            >Login</v-list-item-title>
            <v-list-item-title
              v-else
              @click="logout"
            >Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="secondary"
      dark
    >
      <v-app-bar-nav-icon
        color="black"
        @click.stop="drawer = !drawer"
      />
      <div class="d-flex align-center">
        <v-toolbar-title class="black--text">
          Cyberia
        </v-toolbar-title>
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import authComposition from '@/composable/authHandler';

export default defineComponent({
  name: 'NavBarMobile',

  components: {
  },

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

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
