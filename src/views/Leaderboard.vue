<template>
  <div>
    <leaderboard-section />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import LeaderboardSection from '@/components/organisms/LeaderboardSection.vue';

export default defineComponent({
  name: 'Leaderboard',

  components: {
    LeaderboardSection,
  },
});
</script>
