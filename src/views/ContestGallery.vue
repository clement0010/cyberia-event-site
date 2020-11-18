<template>
  <v-container>
    <LoaderSpin v-if="loading" />
    <p v-else-if="error">Error {{ error }}</p>
    <div v-else>
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
          v-for="(submission,index) in contestSubmissions"
          :key="index"
          :contestant-id="submission.participant_id"
          :picture-url="submission.submission_url"
        />
      </v-row>
      <v-row justify="center">
        <div class="my-5">
          <contest-submission-form />
        </div>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ContestSubmission from '@/components/molecules/ContestSubmission.vue';
import ContestSubmissionForm from '@/components/molecules/ContestSubmissionForm.vue';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';
import { useGetContestSubmissionQuery } from '@/generated/graphql';
import { useResult } from '@vue/apollo-composable';

export default defineComponent({
  name: 'ContestGallery',
  components: {
    LoaderSpin,
    ContestSubmission,
    ContestSubmissionForm,
  },
  setup() {
    const { result, loading, error } = useGetContestSubmissionQuery();
    const contestSubmissions = useResult(result, null, (data) => data.contest);

    return {
      result,
      loading,
      error,
      contestSubmissions,
    };
  },
});
</script>
