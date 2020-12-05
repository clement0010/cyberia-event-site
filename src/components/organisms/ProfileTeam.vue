<template>
  <v-container>
    <h1 class="text-center">
      My team
    </h1>
    <v-row class="mt-5">
      <v-col cols="12">
        <div class="text-subtitle-1">
          <strong>{{ team.name }}</strong><br>
          {{ team.motto }}<br>
          Score: {{ totalScore }}<br>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="1"
      />
    </v-row>
    <ContributePointsForm />
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';
import ContributePointsForm from '@/components/molecules/ContributePointsForm.vue';

export default defineComponent({
  name: 'TeamProfile',

  components: {
    ContributePointsForm,
  },

  props: {
    team: {
      type: Object,
      default: () => ({
        motto: 'TEST_MOCK_OG_1',
        name: 'MOCK_OG_!',
        picture_url: 'https://picsum.photos/200/300',
        scores: [{ score: 50 }],
      }),
    },
    skill: {
      type: Number,
      default: () => 250,
    },
  },
  setup(props) {
    // Need to make this reactive
    const totalScore = computed(() => props.team.scores.reduce((a: number, b: any) => a + b.score, 0));

    return {
      totalScore,
    };
  },
});
</script>
