<template>
  <div>
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Vote
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Vote</span>
        </v-card-title>
        <v-card-text>
          Do you want to vote for username's submission? This action is irreversible.
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
            Vote
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'SubmissionVote',

  components: {
  },

  props: {
  },

  setup(props) {
    const dialog = ref(false);

    return {
      dialog,
    };
  },
});
</script>
