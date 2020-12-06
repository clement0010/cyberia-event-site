<template>
  <v-col
    cols="12"
    sm="4"
    md="3"
  >
    <v-card>
      <v-card-title>
        {{ team.name }}
      </v-card-title>
      <v-card-text>
        Votes<br>
        <div
          v-for="(member, index) in team.participants"
          :key="index"
          class="px-3"
        >
          <v-row>
            {{ member.name }}
            <v-spacer />
            {{ member.impostor_vote_count }}
          </v-row>
          <v-divider />
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="secondary"
          @click="startStopEmergencyMeetingWrapper()"
        >
          {{ team.emergency_meeting ? "Stop meeting" : "Start meeting" }}
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'EmergencyMeetingCard',
  components: {
  },
  props: {
    team: {
      type: Object,
      default: () => ({
        name: 'Rainbow Team',
        emergency_meeting: false,
        participants: [{
          name: 'Ah Beng',
          impostor_vote_count: 0,
        }, {
          name: 'Roger',
          impostor_vote_count: 0,
        }],
      }),
    },
  },
  setup() {
    function startStopEmergencyMeetingWrapper() {
      const a = 1;
    }
  },
});
</script>
