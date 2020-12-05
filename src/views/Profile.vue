<template>
  <div>
    <LoaderSpin v-if="loading" />
    <p v-else-if="error">Error {{ error }}</p>
    <ProfileCard
      v-else
      :profile="profile"
      :loading="loading"
      :skill="skill"
      :meeting-participants="meetingParticipants"
    />

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api';
import { useResult } from '@vue/apollo-composable';
import { useGetOneParticipantDetailsQuery, useEmergencyMeetingDetailsSubscription } from '@/generated/graphql';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';
import ProfileCard from '@/components/organisms/ProfileCard.vue';

export default defineComponent({
  name: 'Profile',
  components: {
    LoaderSpin,
    ProfileCard,
  },

  data: () => ({
    skill: 25,
  }),

  setup(_, { root }) {
    const auth0_id = ref(root.$auth.user?.sub || '');
    const { result, loading, error } = useGetOneParticipantDetailsQuery({ auth0_id: auth0_id.value });
    const profile = useResult(result, null, (data) => data.participants[0]);

    const { result: result1, loading: loading1, error: error1 } = useEmergencyMeetingDetailsSubscription();
    const meetingParticipants = ref();
    watch(
      result1,
      (data) => {
        meetingParticipants.value = data.participants;
      },

    );
    return {
      profile,
      meetingParticipants,
      loading,
      loading1,
      error,
      error1,
    };
  },
});
</script>
