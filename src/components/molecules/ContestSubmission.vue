<template>
  <transition
    appear
    name="slide-fade-up"
  >
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
            v-if="contestantId!==participantId && vote "
            :contestant-id="contestantId"
            :participant-id="participantId"
          />
        </v-card-actions>
      </v-card>
    </v-col>
  </transition>
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

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-up-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-up-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-up-enter, .slide-fade-up-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
}

</style>
