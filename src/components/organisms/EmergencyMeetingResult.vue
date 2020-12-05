<template>
  <v-container>
    <h1 class="text-center">
      Emergency Meeting Results
    </h1>
    <v-row class="mt-5">
      The following members have been voted out! He/she will still be able to participate in the games as a ghost.
      <div
        v-for="(member, index) in deadParticipants"
        :key="index"
      >
        {{ member.name + " " + member.role }}
      </div>
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
    deadParticipants: {
      type: Array,
      default: () => [({
        name: 'HUMAN2077',
        role: 'IMPOSTOR',
      })],
    },
  },
});
</script>
