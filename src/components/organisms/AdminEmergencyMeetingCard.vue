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
            {{ member.imposter_vote_count }}
          </v-row>
          <v-divider />
        </div>
      </v-card-text>
      <v-card-actions>
        <EditEmergencyMeetingForm
          :id="team.id"
          :participants="team.participants"
          :emergency-meeting="team.emergency_meeting"
        />
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import EditEmergencyMeetingForm from '@/components/molecules/EditEmergencyMeetingForm.vue';

export default defineComponent({
  name: 'AdminEmergencyMeetingCard',
  components: {
    EditEmergencyMeetingForm,
  },
  props: {
    team: {
      type: Object,
      default: () => ({
        name: 'Rainbow Team',
        emergency_meeting: false,
        number: 10,
        participants: [{
          name: 'Ah Beng',
          imposter_vote_count: 0,
        }, {
          name: 'Roger',
          imposter_vote_count: 0,
        }],
      }),
    },
  },
  setup() {
    function startStopEmergencyMeetingWrapper() {
      const a = 1;
    }

    return {
      startStopEmergencyMeetingWrapper,
    };
  },
});
</script>
