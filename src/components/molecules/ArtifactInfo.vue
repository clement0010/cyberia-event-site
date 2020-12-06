<template>
  <div>
    <v-btn
      class="black--text"
      icon
      small
      @click="dialog = true"
    >
      <v-icon size="20">mdi-information</v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      fullscreen
      max-width="600px"
    >
      <v-card>
        <v-card-title class="headline">
          {{ itemName }}
        </v-card-title>

        <v-card-text>
          {{ ability }}<br><br>
          <p class="font-italic">
            {{ description }}
          </p>
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
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'ArtifactInfo',

  components: {
  },

  props: {
    itemName: {
      type: String,
      default: () => 'Nothing',
    },
    ability: {
      type: String,
      default: () => 'Does not really do anything.',
    },
    description: {
      type: String,
      default: () => 'Seriously. It does nothing.',
    },
  },

  setup() {
    const dialog = ref(false);

    return {
      dialog,
    };
  },
});
</script>
