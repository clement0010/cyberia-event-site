<template>
  <v-col
    cols="12"
    sm="6"
    md="4"
  >
    <v-card>
      <ContestSubmissionExpanded
        :picture-url="pictureUrl"
        :contestant-id="contestantId"
        :participant-id="participantId"
        :vote="vote"
      />
      <v-card-text>
        <strong>Submission title</strong><br>
        By username {{ contestantId }} -- for debugging purposes
      </v-card-text>
      <v-card-actions>
        <SubmissionVote
          v-if="contestantId!==participantId && vote"
          :contestant-id="contestantId"
          :participant-id="participantId"
        />
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import SubmissionVote from './SubmissionVote.vue';
import ContestSubmissionExpanded from './ContestSubmissionExpanded.vue';

export default defineComponent({
  name: 'ContestSubmission',

  props: {
    pictureUrl: {
      type: String,
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

  components: {
    ContestSubmissionExpanded,
    SubmissionVote,
  },

});
</script>
