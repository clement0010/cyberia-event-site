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
        Scores<br>
        <div
          v-for="(participant, index) in team.participants"
          :key="index"
          class="px-3"
        >
          <v-row>
            {{ participant.name }}
            <v-spacer />
            {{ participant.score }}
          </v-row>
          <v-divider />
        </div>
      </v-card-text>
      <v-card-actions>
        <EditTeamForm
          :id="team.id"
          :participants-scores="team.participants"
        />
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import EditTeamForm from '@/components/molecules/EditTeamForm.vue';

export default defineComponent({
  name: 'TeamCard',
  components: {
    EditTeamForm,
  },
  props: {
    team: {
      type: Object,
      default: () => ({
        name: 'TEAM1',
        id: 'c15a5929-0564-4e24-8811-930ab511408c',
        participants: [
          {
            name: 'Official Account Crewmate 1',
            score: 618,
            id: 'f4c18794-b85f-4bca-a121-c8e0d1df10fd',
          },
          {
            name: 'team1_crewmate1 ...',
            score: 0,
            id: 'c743b409-35d0-4d28-b098-1ff2599bbf17',
          },
        ],
      }),
    },
  },
});
</script>
