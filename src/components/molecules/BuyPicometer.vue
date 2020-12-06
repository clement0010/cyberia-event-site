<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      dark
      :disabled="bought"
      @click="confirmationDialog = true"
    >
      {{ bought ? "Bought" : "Buy" }}
    </v-btn>

    <v-dialog
      v-model="confirmationDialog"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      max-width="600px"
    >
      <v-card>
        <v-card-title class="headline">
          Buy Picometer Microscope
        </v-card-title>

        <v-card-text>
          Do you want to buy Picometer Microscope (150 pts)?
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            @click="buyPicometerMicroscopeWrapper"
          >
            Yes
          </v-btn>
          <v-btn
            color="secondary"
            @click="confirmationDialog = false"
          >
            No
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
import { GetArtifactsDetailsDocument, GetOneParticipantDetailsDocument, useBuyPicometerMutation } from '@/generated/graphql';
import { useApolloClient } from '@vue/apollo-composable';
import CacheService from '@/services/cacheService';
import SnackBar from '@/components/atoms/Snackbars.vue';
import snackBarComposition from '@/composable/snackbar';

export default defineComponent({
  name: 'BuyPicometer',

  components: {
    SnackBar,
  },

  props: {
    bought: {
      type: Boolean,
      default: true,
    },
    score: {
      type: Number,
      default: 0,
    },
  },

  setup(props, { root }) {
    const confirmationDialog = ref(false);
    const { resolveClient } = useApolloClient();
    const client = resolveClient();

    const {
      timeout, snackbar, message, snackbarHandler,
    } = snackBarComposition();

    const { mutate: buyPicometer } = useBuyPicometerMutation({});

    function buyPicometerMicroscopeWrapper() {
      if (props.score < 150) {
        snackbarHandler('Insufficient Points!');
        return;
      }
      buyPicometer({
        auth0_id: root.$auth.user?.sub || '',
      }).then((result) => {
        if (result.data.update_participants.affected_rows) {
          const cache = new CacheService(client);

          const data = cache.read(GetArtifactsDetailsDocument, { auth0_id: root.$auth.user?.sub });
          data.participants[0].picometer = true;
          cache.write(GetArtifactsDetailsDocument, { participants: data.participants[0] });

          const cacheData = cache.read(GetOneParticipantDetailsDocument, { auth0_id: root.$auth.user?.sub });
          const participants = cacheData.participants[0];
          participants.score -= 150;
          cache.write(GetOneParticipantDetailsDocument, { participants });
          snackbarHandler('Purchase Successfully!');
        } else {
          snackbarHandler('Uh oh! Error!');
        }
      }).catch((err) => {
        console.error(err);
        snackbarHandler('Error! Try again later!');
      });
      confirmationDialog.value = false;
    }

    return {
      confirmationDialog,
      buyPicometerMicroscopeWrapper,
      timeout,
      message,
      snackbar,
    };
  },
});
</script>
