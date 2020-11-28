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
          v-for="index in Math.min(contestSubmissions.length-itemsPerPage*(currentPage-1), itemsPerPage)"
          :key="index"
          :contestant-id="contestSubmissions[index-1+itemsPerPage*(currentPage-1)].participant_id"
          :picture-url="contestSubmissions[index-1+itemsPerPage*(currentPage-1)].submission_url"
        />
      </v-row>
      <v-row justify="center">
        <v-pagination
          v-model="currentPage"
          :length="length"
          @input="handlePageChange"
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
import { defineComponent, computed } from '@vue/composition-api';
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
    const contestSubmissions = useResult(result, [], (data) => data.contest);
    let currentPage = 1;
    const itemsPerPage = 12;
    const length = computed(() => Math.ceil(contestSubmissions.value.length / itemsPerPage));

    function handlePageChange(value: number) {
      currentPage = value;
    }

    return {
      currentPage,
      handlePageChange,
      itemsPerPage,
      length,
      result,
      loading,
      error,
      contestSubmissions,
    };
  },
});
</script>
