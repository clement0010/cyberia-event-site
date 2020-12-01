<template>
  <v-container>
    <h1 class="text-center">
      My team
    </h1>
    <v-row>
      <v-col cols="12">
        <div class="text-subtitle-1">
          <strong>{{ team.name }}</strong><br>
          {{ team.motto }}<br>
          Score: 250/1000<br>
        </div>
      </v-col>
      <v-col
        cols="12"
        justify="center"
      >
        <v-progress-linear
          :value="skill"
          color="secondary"
          height="15"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'TeamProfile',

  components: {
  },

  props: {
    team: {
      type: Object,
      default: () => ({
        motto: 'TEST_MOCK_OG_1',
        name: 'MOCK_OG_!',
        picture_url: 'https://picsum.photos/200/300',
      }),
    },
    skill: {
      type: Number,
      default: () => 25,
    },
  },
});
</script>
