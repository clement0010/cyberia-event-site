<template>
  <v-container>
    <v-row
      class="my-10"
      justify="center"
    >
      <v-carousel
        v-model="model"
        show-arrows-on-hover
        height="auto"
      >
        <v-carousel-item
          v-for="n in 3"
          :key="n"
          :src="require(`@/assets/competition-rules-${n+1}.jpg`)"
          width="100vw"
          eager
        />
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'CompetitionRules',

  components: {
  },

  setup() {
    const model = ref(0);
    return {
      model,
    };
  },
});
</script>
