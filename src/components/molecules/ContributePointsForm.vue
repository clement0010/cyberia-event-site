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
    <SnackBar
      :text="message"
      :timeout="timeout"
      :snackbar="snackbar"
    />
  </v-row>
</template>

<script lang="ts">

import { defineComponent, ref } from '@vue/composition-api';
import { GetOneParticipantDetailsDocument, useAddScoreToTeamMutation } from '@/generated/graphql';
import { useApolloClient } from '@vue/apollo-composable';
import CacheService from '@/services/cacheService';
import SnackBar from '@/components/atoms/Snackbars.vue';
import snackBarComposition from '@/composable/snackbar';

export default defineComponent({
  name: 'ContributePointsForm',

  components: {
    SnackBar,
  },

  setup(_, { root }) {
    const { resolveClient } = useApolloClient();
    const client = resolveClient();
    const dialog = ref(false);
    const {
      timeout, snackbar, message, snackbarHandler,
    } = snackBarComposition();

    const points = ref(0);
    const { mutate: contributePoints } = useAddScoreToTeamMutation({});

    function contributeWrapper() {
      contributePoints({
        crewmate: -points.value,
        team: +points.value,
        auth0_id: root.$auth.user?.sub || '',
      }).then((result) => {
        if (result.data.update_participants.affected_rows) {
          const cache = new CacheService(client);
          const point = +points.value;
          console.log(point, 'point');

          const { participants } = cache.read(GetOneParticipantDetailsDocument, { auth0_id: root.$auth.user?.sub });
          participants[0].score -= point;
          participants[0].contribution += point;
          cache.write(GetOneParticipantDetailsDocument, { participants });
          participants[0].team.scores[0].score += point;

          points.value = 0;
        } else {
          throw new Error('Contribution Error');
        }
      }).catch((err) => {
        console.error(err);
        snackbarHandler('Uh oh! Error!');
      });
      snackbarHandler('Contributed Successfully!');
      dialog.value = false;
    }

    return {
      points,
      contributeWrapper,
      dialog,
      snackbar,
      timeout,
      message,
    };
  },
});
</script>
