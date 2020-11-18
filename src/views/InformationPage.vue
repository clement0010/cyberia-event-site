<template>
  <v-container class="about">
    <div class="my-5">
      <h1 class="text-center">Information Page</h1>
    </div>
    <v-tabs
      color="white"
      fixed-tabs
    >
      <v-tab to="/about/general">
        About
      </v-tab>
      <v-tab to="/about/itinerary">
        Schedule
      </v-tab>
      <v-tab to="/about/faq">
        FAQ
      </v-tab>
    </v-tabs>
    <v-row justify="center">
      <router-view />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'About',
  components: {
  },
});
</script>
