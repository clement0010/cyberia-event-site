<template>
  <div>
    <LoaderSpin v-if="loading" />
    <p v-if="error">Error! {{ mode === 'production' ? 'Something is wrong, please refresh!' : error }}</p>
    <LeaderboardSection
      v-else
      :teams="leaderboard"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from '@vue/composition-api';
import LeaderboardSection from '@/components/organisms/LeaderboardSection.vue';
import { useSubscribePublicLeaderboardSubscription } from '@/generated/graphql';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';

export default defineComponent({
  name: 'Leaderboard',

  components: {
    LeaderboardSection,
    LoaderSpin,

  },

  setup() {
    const { result, loading, error } = useSubscribePublicLeaderboardSubscription();
    const leaderboard = ref();
    const mode = ref(process.env.NODE_ENV);

    watch(
      result,
      (data) => {
        leaderboard.value = data.leaderboard_public;
      },
    );

    return {
      loading,
      error,
      mode,
      leaderboard,
    };
  },
});
</script>
