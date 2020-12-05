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
          Buy Viewfinder
        </v-card-title>

        <v-card-text>
          Do you want to buy Viewfinder (200 pts)?
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            @click="buyViewfinderWrapper()"
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
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'BuyViewfinder',

  components: {
  },

  props: {
    bought: {
      type: Boolean,
    },
  },

  setup(props) {
    const confirmationDialog = ref(false);

    function buyViewfinderWrapper() {
      confirmationDialog.value = false;
    }

    return {
      confirmationDialog,
      buyViewfinderWrapper,
    };
  },
});
</script>
