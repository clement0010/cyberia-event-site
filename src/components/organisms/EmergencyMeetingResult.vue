<template>
  <v-container class="mt-5">
    <h1 class="text-center">
      Emergency Meeting Results
    </h1>
    <v-row
      v-if="deadParticipants.length > 0"
      class="mt-5"
    >
      <v-col cols="12">
        The following members have been voted out! He/she will still be able to participate in the games as a ghost.<br><br>
        <div
          v-for="(member, index) in deadParticipants"
          :key="index"
        >
          <p>{{ member.name + " (" + member.role + ")" }}</p>
        </div>
      </v-col>
    </v-row>
    <v-row
      v-else
      class="mt-5"
    >
      No emergency meetings have been held so far.
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
      default: () => [{
        name: 'HUMAN2077',
        role: 'IMPOSTOR',
      }, {
        name: 'Bob',
        role: 'CREWMATE',
      }],
    },
  },
});
</script>
