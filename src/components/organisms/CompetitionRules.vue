<template>
  <v-container>
    <v-row
      class="my-10"
      justify="center"
    >
      <div v-if="currentPage === 1">
        <v-img
          src="@/assets/competition-rules-2.jpg"
          max-width="85vw"
        />
      </div>
      <div v-if="currentPage === 2">
        <v-img
          src="@/assets/competition-rules-3.jpg"
          max-width="85vw"
        />
      </div>
      <div v-if="currentPage === 3">
        <v-img
          src="@/assets/competition-rules-4.jpg"
          max-width="85vw"
        />
      </div>
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
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'CompetitionRules',

  components: {
  },

  setup() {
    let currentPage = 1;

    function handleInput(page: number) {
      currentPage = page;
    }

    return {
      currentPage,
      handleInput,
    };
  },
});
</script>
