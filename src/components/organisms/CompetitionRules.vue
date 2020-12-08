<template>
  <v-container>
    <v-row
      class="my-10"
      justify="center"
    >
      <v-carousel
        v-model="model"
        show-arrows-on-hover
        max-width="75vw"
      >
        <v-carousel-item
          v-for="n in 3"
          :key="n"
          :src="require(`@/assets/competition-rules-${n+1}.jpg`)"
          transition="slide-fade"
          reverse-transition="slide-fade"
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

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-20px);
  opacity: 0.15;
}
</style>
