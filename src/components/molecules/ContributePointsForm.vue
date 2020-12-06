<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="black--text"
          color="secondary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Contribute Points
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Contribute Points</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="points"
                  color="white"
                  label="Points"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            class="black--text"
            color="secondary"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            class="black--text"
            color="primary"
            @click="contributeWrapper"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">

import { defineComponent, ref } from '@vue/composition-api';
import { GetOneParticipantDetailsDocument, useAddScoreToTeamMutation } from '@/generated/graphql';
import { useApolloClient } from '@vue/apollo-composable';
import CacheService from '@/services/cacheService';

export default defineComponent({
  name: 'ContributePointsForm',

  setup(_, { root }) {
    const { resolveClient } = useApolloClient();
    const client = resolveClient();
    const dialog = ref(false);

    const points = ref(0);
    const { mutate: contributePoints } = useAddScoreToTeamMutation({});

    function contributeWrapper() {
      dialog.value = false;

      contributePoints({
        crewmate: -points.value,
        team: +points.value,
        auth0_id: root.$auth.user?.sub || '',
      }).then((result) => {
        const cache = new CacheService(client);
        const participants = result.data.update_participants.returning;
        cache.write(GetOneParticipantDetailsDocument, { participants });
      });
    }

    return {
      points,
      contributeWrapper,
      dialog,
    };
  },
});
</script>
