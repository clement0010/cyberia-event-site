<template>
  <v-col
    cols="12"
    sm="6"
    md="4"
  >
    <v-card>
      <v-img
        src="https://picsum.photos/id/654/1600/900"
      />
      <v-card-text>
        Submission title<br>
        By username
      </v-card-text>
      <v-card-actions>
        <v-btn>
          Vote
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ContestSubmission',
  components: {
  },
});
</script>
