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
        <router-link
          to="/"
          class="text-decoration-none"
        >
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link
          to="/profile"
          class="text-decoration-none"
        >
          <v-list-item>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
        </router-link>

        <v-list-item>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="d-flex align-center">
        <v-toolbar-title>
          Cyberia 2020 Site
        </v-toolbar-title>
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'NavBarMobile',

  components: {
  },

  data: () => ({
    drawer: false,
  }),
});
</script>
