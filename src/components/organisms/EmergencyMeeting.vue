<template>
  <div>
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <v-row
        v-for="(participant, index) in meetingParticipants"
        :key="index"
      >

        <EmergencyMeetingCard
          :meeting-participant="participant"
          :emergency-vote="emergencyVote"
        />
      </v-row>
    </v-col>
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
      }],
    },
    emergencyVote: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
