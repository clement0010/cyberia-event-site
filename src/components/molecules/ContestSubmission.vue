<template>
  <transition
    appear
    name="slide-fade-right"
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
.slide-fade-right-enter-active {
  transition: all 2.5s ease;
}
.slide-fade-right-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-right-enter, .slide-fade-right-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}

</style>
