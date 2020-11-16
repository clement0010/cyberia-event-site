<template>
  <v-col
    cols="12"
    sm="4"
    md="3"
  >
    <v-card>
      <v-card-title>
        Game
      </v-card-title>
      <v-card-text>
        Top 3<br>
        <div
          v-for="n in 3"
          :key="n"
          class="px-3"
        >
          <v-row>
            Team A
            <v-spacer />
            20
          </v-row>
          <v-divider />
        </div>
      </v-card-text>
      <v-card-actions>
        <edit-game-form />
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import EditGameForm from '@/components/molecules/EditGameForm.vue';

export default defineComponent({
  name: 'GameCard',
  components: {
    EditGameForm,
  },
});
</script>
