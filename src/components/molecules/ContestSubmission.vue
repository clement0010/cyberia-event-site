<template>
  <v-col
    cols="12"
    sm="6"
    md="4"
  >
    <v-card>
      <expanded-contest-submission
        :picture-url="pictureUrl"
        :contestant-id="contestantId"
        :participant-id="participantId"
        :voted="voted"
      />
      <v-card-text>
        <strong>Submission title</strong><br>
        By username {{ contestantId }} -- for debugging purposes
      </v-card-text>
      <v-card-actions>
        <submission-vote
          v-if="contestantId!==participantId && !voted"
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
import ExpandedContestSubmission from './ExpandedContestSubmission.vue';

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
    voted: {
      type: Boolean,
      default: () => false,
    },
  },

  components: {
    ExpandedContestSubmission,
    SubmissionVote,
  },

});
</script>
