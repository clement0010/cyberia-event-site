<template>
  <v-card-actions>
    <v-btn
      outlined
      rounded
      @click="vote"
    >
      Vote
    </v-btn>
  </v-card-actions>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import { useEmergencyMeetingVoteMutation, GetOneParticipantDetailsDocument } from '@/generated/graphql';
import { useApolloClient } from '@vue/apollo-composable';
import CacheService from '@/services/cacheService';

export default defineComponent({
  props: {
    targetId: {
      type: String,
    },
  },
  setup(props, { root }) {
    const data = reactive({
      participant_id: props.targetId || '',
      user_id: root.$auth.user?.sub || '',
    });

    const { resolveClient } = useApolloClient();
    const client = resolveClient();
    const { mutate: CastEmergencyVote } = useEmergencyMeetingVoteMutation({});

    function vote() {
      CastEmergencyVote(data).then((result) => {
        if (result.data.update_my_vote) {
          const cache = new CacheService(client);
          const cacheData = cache.read(GetOneParticipantDetailsDocument, { auth0_id: data.user_id });
          const participants = cacheData.participants[0];
          participants.emergency_vote = true;
          cache.write(GetOneParticipantDetailsDocument, { participants });
        }
      });
    }

    return {
      vote,
    };
  },

});
</script>
