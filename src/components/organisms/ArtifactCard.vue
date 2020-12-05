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
        Top 3<br>
        <div
          v-for="(participant, index) in team.participants"
          :key="index"
          class="px-3"
        >
          <v-row>
            {{ participant.name }}
          </v-row>
          <v-divider />
        </div>
      </v-card-text>
      <v-card-actions>
        <AdminArtifact
          :participants="team.participants"
          :type="type"
        />
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import AdminArtifact from '@/components/molecules/AdminArtifact.vue';

export default defineComponent({
  name: 'TeamCard',
  components: {
    AdminArtifact,
  },
  props: {
    team: {
      type: Object,
      default: () => ({
        name: 'TEAM1',
        id: 'c15a5929-0564-4e24-8811-930ab511408c',
        participants: [
          {
            picometer: true,
            id: '81f044f0-e926-436c-a1ed-8bc45d5c49a4',
            name: 'Participant1',
          },
          {
            picometer: true,
            id: 'a9927000-3c5e-4536-8bfa-b9992f852deb',
            name: 'Participant2',
          },
        ],
      }),
    },
    type: {
      type: String,
    },
  },
});
</script>
