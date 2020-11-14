<template>
  <LoaderSpin v-if="loading" />
  <p v-else-if="error">Error</p>
  <ProfileCard
    v-else
    :profile="profile"
    :loading="loading"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useResult } from '@vue/apollo-composable';
import { useGetOneParticipantDetailsQuery } from '@/generated/graphql';
import ProfileCard from '@/components/organisms/ProfileCard.vue';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';

export default defineComponent({
  name: 'Profile',
  components: {
    ProfileCard,
    LoaderSpin,
  },
  setup() {
    const { result, loading, error } = useGetOneParticipantDetailsQuery();
    const profile = useResult(result, null, (data) => data.participants[0]);

    console.log(profile, 'USER PROFILE');
    return {
      profile,
      loading,
      error,
    };
  },
});
</script>
