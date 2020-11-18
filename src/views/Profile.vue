<template>
  <div>
    <LoaderSpin v-if="loading" />
    <p v-else-if="error">Error {{ error }}</p>
    <ProfileCard
      v-else
      :profile="profile"
      :loading="loading"
      :skill="skill"
    />

  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useResult } from '@vue/apollo-composable';
import { useGetOneParticipantDetailsQuery } from '@/generated/graphql';
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

  setup() {
    const { result, loading, error } = useGetOneParticipantDetailsQuery();
    const profile = useResult(result, null, (data) => data.participants[0]);

    return {
      profile,
      loading,
      error,
    };
  },
});
</script>
