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
          <div class="mt-4">
            <strong>Submission title</strong><br>
            By username
          </div>
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
          <submission-vote
            v-if="contestantId!==participantId && vote"

            :contestant-id="contestantId"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import SubmissionVote from './SubmissionVote.vue';

export default defineComponent({
  name: 'ExpandedContestSubmission',

  components: {
    SubmissionVote,
  },

  props: {
    pictureUrl: {
      type: String,
      default: () => 'https://picsum.photos/id/654/1600/900',
    },
    contestantId: {
      type: String,
    },
    participantId: {
      type: String,
    },
    vote: {
      type: Boolean,
      default: () => false,
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

<style scoped>
.image :hover {
  cursor: pointer;
}
</style>
