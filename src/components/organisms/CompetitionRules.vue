<template>
  <v-container>
    <v-row
      class="my-10"
      justify="center"
    >
      <v-container>
        <transition
          name="slide-fade-left"
          mode="out-in"
        >
          <v-img
            :key="currentPage"
            :src="require(`@/assets/competition-rules-${currentPage+1}.jpg`)"
            max-width="85vw"
          />
        </transition>
      </v-container>
    </v-row>
    <v-row justify="center">
      <v-pagination
        v-model="currentPage"
        :value="currentPage"
        :length="3"
        circle
        @input="handleInput"
      />
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
    const currentPage = ref(1);
    const src = ref('@/assets/competition-rules-2.jpg');

    function handleInput(page: number) {
      currentPage.value = page;
    }

    return {
      currentPage,
      handleInput,
      src,
    };
  },
});
</script>

<style scoped>
.slide-fade-left-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-left-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-left-enter, .slide-fade-left-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
