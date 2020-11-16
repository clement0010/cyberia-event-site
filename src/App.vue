<template>
  <v-app>
    <nav-bar-web v-if="$vuetify.breakpoint.mdAndUp"/>
    <nav-bar-mobile v-else />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import NavBarWeb from '@/components/organisms/NavBar.vue';
import { defineComponent } from '@vue/composition-api';
import NavBarMobile from './components/organisms/NavBarMobile.vue';

export default defineComponent({
  name: 'App',

  components: {
    NavBarWeb,
    NavBarMobile,
  },

  data: () => ({
    //
  }),
});
</script>
