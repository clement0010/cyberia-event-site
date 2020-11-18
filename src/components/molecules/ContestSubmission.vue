<template>
  <v-col
    cols="12"
    sm="6"
    md="4"
  >
    <v-card>
      <expanded-contest-submission />
      <v-card-text>
        Submission title<br>
        By username
      </v-card-text>
      <v-card-actions>
        <v-btn>
          Vote
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import ExpandedContestSubmission from './ExpandedContestSubmission.vue';

export default defineComponent({
  name: 'ContestSubmission',

  components: {
    ExpandedContestSubmission,
  },
});
</script>
