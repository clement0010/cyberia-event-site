<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Game</span>
        </v-card-title>
        <v-card-text>
          <v-select
            label="Team"
            :items="teams"
          />
          <v-select
            label="Score"
            :items="scores"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="secondary"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="dialog = false"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'EditGameForm',

  props: {
    teams: {
      type: Array,
      default: () => ['Team A', 'Team B', 'Team C'],
    },
    scores: {
      type: Array,
      default: () => ['0', '5', '10', '20'],
    },
  },

  data: () => ({
    dialog: false,
  }),
});
</script>
