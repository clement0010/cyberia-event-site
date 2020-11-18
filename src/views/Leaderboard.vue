<template>
  <div>
    <LoaderSpin v-if="loading" />
    <p v-else-if="error">Error {{ error }}</p>
    <leaderboard-section
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
    watch(
      result,
      (data) => {
        leaderboard.value = data.leaderboard_public;
      },

    );
    return {
      loading,
      error,
      leaderboard,
    };
  },
});
</script>
