<template>
  <v-container>
    <v-container>
      <v-row justify="center">
        <v-img
          src="@/assets/logo-white.png"
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
          <transition name="left-button">
            <v-btn
              :x-large="$vuetify.breakpoint.smAndUp"
              color="secondary"
            >
              Contest Gallery
            </v-btn>
          </transition>
        </router-link>
      </div>
      <div class="mx-10 my-5">
        <router-link
          to="/information-page/general"
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

export default defineComponent({
  name: 'Home',
});
</script>

<style>
.left-button-enter-active {
  animation: coming .4s;
  animation-delay: .4s;
  opacity: 0;
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
