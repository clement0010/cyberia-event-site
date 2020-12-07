<template>
  <v-app>
    <transition
      appear
      name="slide-fade-down"
    >
      <nav-bar-web v-if="$vuetify.breakpoint.mdAndUp" />
      <nav-bar-mobile v-else />
    </transition>

    <v-main>
      <transition
        appear
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import NavBarWeb from '@/components/organisms/NavBarWeb.vue';
import { defineComponent } from '@vue/composition-api';
import NavBarMobile from '@/components/organisms/NavBarMobile.vue';

export default defineComponent({
  name: 'App',

  components: {
    NavBarWeb,
    NavBarMobile,
  },
});
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
