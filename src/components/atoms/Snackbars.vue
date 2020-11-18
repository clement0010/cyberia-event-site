<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
  >
    {{ text }}
  </v-snackbar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  components: {
  },
  props: {
    text: {
      type: String,
      default: () => 'My timeout is set to 2000.',
    },
    timeout: {
      type: Number,
      default: () => 2000,
    },
    snackbar: {
      type: Boolean,
      default: () => false,
    },
  },
});
</script>
