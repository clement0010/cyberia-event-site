<template>
  <v-container class="about">
    <div class="my-5">
      <h1 class="text-center">Information Page</h1>
    </div>
    <v-tabs
      color="white"
      fixed-tabs
    >
      <v-tab to="/information-page/general">
        About
      </v-tab>
      <v-tab to="/information-page/itinerary">
        Schedule
      </v-tab>
      <v-tab to="/information-page/competition-rules">
        Competition Rules
      </v-tab>
    </v-tabs>
    <v-row justify="center">
      <transition
        name="router-anim"
        appear
      >
        <router-view />
      </transition>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'About',
});
</script>

<style scoped>
.page {
  position: fixed;
  width: inherit;
}

.router-anim-enter-active {
  animation: coming .4s;
  animation-delay: .4s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going .4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(75px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-75px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
