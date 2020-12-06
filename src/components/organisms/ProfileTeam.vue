<template>
  <v-container>
    <h1 class="text-center">
      My team
    </h1>
    <v-row class="mt-5">
      <v-col cols="12">
        <div class="text-subtitle-1">
          <strong>{{ team.name }}</strong><br>
          {{ team.motto }}<br>
          Score: {{ totalScore }}<br>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="1"
      />
    </v-row>
    <ContributePointsForm />
    <div
      v-if="team.emergency_meeting"
      class="mt-10 mb-5"
    >
      <h1 class="text-center red--text">
        Emergency Meeting
      </h1>
    </div>
    <EmergencyMeeting
      v-if="team.emergency_meeting"
      :meeting-participants="meetingParticipants"
      :emergency-vote="emergencyVote"
    />
    <emergency-meeting-result
      v-else
      :dead-participants="deadParticipants"
    />
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import ContributePointsForm from '@/components/molecules/ContributePointsForm.vue';
import EmergencyMeeting from '@/components/organisms/EmergencyMeeting.vue';
import EmergencyMeetingResult from './EmergencyMeetingResult.vue';

export default defineComponent({
  name: 'TeamProfile',

  components: {
    ContributePointsForm,
    EmergencyMeeting,
    EmergencyMeetingResult,
  },

  props: {
    team: {
      type: Object,
      default: () => ({
        motto: 'TEST_MOCK_OG_1',
        name: 'MOCK_OG_!',
        picture_url: 'https://picsum.photos/200/300',
        emergency_meeting: false,
        scores: [{ score: 50 }],
      }),
    },
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
    deadParticipants: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    // Need to make this reactive
    const totalScore = computed(() => props.team.scores.reduce((a: number, b: any) => a + b.score, 0));

    return {
      totalScore,
    };
  },
});
</script>
