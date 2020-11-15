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
          large
          v-bind="attrs"
          v-on="on"
        >
          Add Submission
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Submission</span>
        </v-card-title>
        <v-card-text>
          <v-file-input placeholder="Upload file" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            @click="dialog = false"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ContestSubmissionForm',
  components: {
  },
});
</script>
