<template>
  <v-container>
    <h1 class="text-center">
      Emergency Meeting Results
    </h1>
    <v-row class="mt-5">
      {{ votedOutUser.name + (votedOutUser.role == "IMPOSTOR" ? " (IMPOSTOR)" : " (Crewmate)") }}
      has been voted out! He/she will still be able to participate in the games as a ghost.
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'EmergencyMeetingResult',

  components: {
  },

  props: {
    votedOutUser: {
      type: Object,
      default: () => ({
        name: 'HUMAN2077',
        role: 'IMPOSTOR',
      }),
    },
  },
});
</script>
