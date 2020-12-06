<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          {{ meetingParticipant.name }}
        </v-list-item-title>
        <v-progress-linear
          :value="(meetingParticipant.imposter_vote_count/meetingParticipant.team.number)*100"
          color="blue-grey"
          height="20"
        >
          <v-list-item-subtitle class="text-center">{{ meetingParticipant.imposter_vote_count }}</v-list-item-subtitle>
        </v-progress-linear>
        <v-list-item-subtitle v-if="meetingParticipant.emergency_vote">Voted</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
      >
        <v-img
          :src="meetingParticipant.team.picture_url"
        />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <EmergencyVotingButton
        v-if="!emergencyVote"
        :target-id="meetingParticipant.user_id"
      />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import EmergencyVotingButton from '@/components/atoms/EmergencyVoting.vue';

export default defineComponent({
  name: 'EmergencyMeetingCard',
  components: {
    EmergencyVotingButton,
  },
  props: {
    meetingParticipant: {
      type: Object,
      default: () => ({
        emergency_vote: false,
        imposter_vote_count: 0,
        name: 'Test User',
        status: 'ALIVE',
        user_id: '0',
        team: {
          number: 0,
        },
      }),
    },
    emergencyVote: {
      type: Boolean,
      default: true,
    },
  },

});
</script>
