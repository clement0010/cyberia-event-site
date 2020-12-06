<template>
  <div>
    <v-row>
      <v-col
        v-for="(participant, index) in meetingParticipants"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <EmergencyMeetingCard
          :meeting-participant="participant"
          :emergency-vote="emergencyVote"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import EmergencyMeetingCard from '@/components/molecules/EmergencyMeetingCard.vue';

export default defineComponent({
  name: 'EmergencyMeeting',

  components: {
    EmergencyMeetingCard,
  },

  props: {
    meetingParticipants: {
      type: Array,
      default: () => [{
        emergency_vote: false,
        imposter_vote_count: 0,
        name: 'Test User',
        status: 'ALIVE',
        user_id: '0',
        team: {
          number: 0,
        },
      }],
    },
    emergencyVote: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
