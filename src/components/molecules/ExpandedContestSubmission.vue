<template>
  <div>
    <v-dialog
      v-model="dialog"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-img
          :src="pictureUrl"
          class="image"
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <v-card>
        <v-img :src="pictureUrl" />
        <v-card-text>
          Submission title<br>
          By username
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="secondary"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            @click="dialog = false"
          >
            Vote
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'ExpandedContestSubmission',

  components: {
  },

  props: {
    pictureUrl: {
      type: String,
      default: () => 'https://picsum.photos/id/654/1600/900',
    },
  },

  setup(props) {
    const dialog = ref(false);

    return {
      dialog,
    };
  },
});
</script>

<style>
.image :hover {
  cursor: pointer;
}
</style>
