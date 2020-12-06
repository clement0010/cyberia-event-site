<template>
  <v-app>
    <transition
      appear
      name="slide-fade-down"
    >
      <nav-bar-web v-if="$vuetify.breakpoint.mdAndUp" />
      <nav-bar-mobile v-else />
    </transition>
    <transition
      appear
      name="fade"
    >
      <v-main>
        <router-view />
      </v-main>
    </transition>
  </v-app>
</template>

<script lang="ts">
import NavBarWeb from '@/components/organisms/NavBarWeb.vue';
import { defineComponent } from '@vue/composition-api';
import NavBarMobile from './components/organisms/NavBarMobile.vue';

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
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-down-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-down-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-down-enter, .slide-fade-down-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
