<template>
  <v-col
    cols="12"
    sm="6"
    md="4"
  >
    <v-card>
      <expanded-contest-submission />
      <v-card-text>
        <strong>Submission title</strong><br>
        By username
      </v-card-text>
      <v-card-actions>
        <submission-vote />
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

  components: {
    ExpandedContestSubmission,
    SubmissionVote,
  },
});
</script>
