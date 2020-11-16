<template>
  <v-container>
    <div class="my-10">
      <h1 class="text-center">
        Contest Gallery
      </h1><br>
      <p class="text-center">
        Vote for your favourite submission here!
      </p>
    </div>
    <v-row justify="start">
      <contest-submission
        v-for="n in 9"
        :key="n"
      />
    </v-row>
    <v-row justify="center">
      <div class="my-5">
        <contest-submission-form />
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ContestSubmission from '@/components/molecules/ContestSubmission.vue';
import ContestSubmissionForm from '@/components/molecules/ContestSubmissionForm.vue';

export default defineComponent({
  name: 'ContestGallery',
  components: {
    ContestSubmission,
    ContestSubmissionForm,
  },
});
</script>
