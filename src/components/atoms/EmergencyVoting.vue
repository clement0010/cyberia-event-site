<template>
  <v-card-actions>
    <v-btn
      class="black--text"
      color="primary"
      outlined
      rounded
      @click="vote"
    >
      Vote
    </v-btn>
    <SnackBar
      :text="message"
      :timeout="timeout"
      :snackbar="snackbar"
    />
  </v-card-actions>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import { useEmergencyMeetingVoteMutation } from '@/generated/graphql';
import SnackBar from '@/components/atoms/Snackbars.vue';
import snackBarComposition from '@/composable/snackbar';

export default defineComponent({
  props: {
    targetId: {
      type: String,
    },
  },

  components: {
    SnackBar,
  },
  setup(props, { root }) {
    const data = reactive({
      participant_id: props.targetId || '',
      user_id: root.$auth.user?.sub || '',
    });

    const {
      timeout, snackbar, message, snackbarHandler,
    } = snackBarComposition();

    const { mutate: CastEmergencyVote } = useEmergencyMeetingVoteMutation({});

    function vote() {
      CastEmergencyVote(data).then((result) => {
        if (result.data.update_my_vote.affected_rows) {
          snackbarHandler('Contributed Successfully!');
        } else {
          snackbarHandler('Uh oh! Error!');
        }
      }).catch((err) => {
        console.error(err);
        snackbarHandler('Error! Try again later!');
      });
    }

    return {
      vote,
      timeout,
      message,
      snackbar,
    };
  },

});
</script>
