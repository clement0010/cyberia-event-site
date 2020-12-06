<template>
  <div>
    <LoaderSpin v-if="loading" />
    <p v-if="error">Error! {{ mode === 'production' ? 'Something is wrong, please refresh!' : error }}</p>
    <ProfileCard
      v-else
      :profile="profile"
      :loading="loading"
      :meeting-participants="meetingParticipants"
      :artifact-details="artifactDetails"
      :dead-participants="deadParticipants"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watch,
} from '@vue/composition-api';
import { useResult } from '@vue/apollo-composable';
import {
  useGetOneParticipantDetailsQuery,
  useEmergencyMeetingDetailsSubscription,
  useGetEmergencyMeetingResultQuery,
  useGetArtifactsDetailsQuery,
} from '@/generated/graphql';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';
import ProfileCard from '@/components/organisms/ProfileCard.vue';

export default defineComponent({
  name: 'Profile',
  components: {
    LoaderSpin,
    ProfileCard,
  },

  setup(_, { root }) {
    const mode = ref(process.env.NODE_ENV);

    const auth0_id = ref(root.$auth.user?.sub || '');
    const { result, loading, error } = useGetOneParticipantDetailsQuery({ auth0_id: auth0_id.value });
    const profile = useResult(result, {}, (data) => data.participants[0]);

    const { result: result2, loading: loading2, error: error2 } = useGetEmergencyMeetingResultQuery();
    const deadParticipants = useResult(result2, [], (data) => data.participants);

    const { result: result3, loading: loading3, error: error3 } = useGetArtifactsDetailsQuery({ auth0_id: auth0_id.value });
    const artifactDetails = useResult(result3, {}, (data) => data.participants[0]);
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
      deadParticipants,
      artifactDetails,
      loading,
      loading1,
      loading2,
      loading3,
      error,
      error1,
      error2,
      error3,
      mode,
    };
  },
});
</script>
