<template>
  <v-container>
    <LoaderSpin v-if="loading" />
    <p v-if="error">Error {{ error }}</p>
    <div
      v-else
    >
      <div class="my-10">
        <h1 class="text-center">
          Contest Gallery
        </h1><br>
        <p class="text-center">
          Vote for your favourite submission here!
        </p>
        <v-row justify="center">
          <div class="my-5">
            <contest-submission-form
              v-if="participantDetails.submission && role !== 'admin' && isAuthenticated"

              :participant-id="participantDetails.id"
            />
            <!-- Need to fix UI -->
            <p v-else-if="!isAuthenticated">Please login first!</p>
          </div>
        </v-row>
      </div>
      <v-row justify="start">
        <contest-submission
          v-for="(submission,index) in contestSubmissions"
          :key="index"
          :contestant-id="submission.participant_id"
          :picture-url="submission.submission_url"
          :participant-id="participantDetails.id"
          :vote="participantDetails.vote"
        />
      </v-row>
      <v-row justify="center" />
    </div>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent, onUnmounted, onMounted, ref,
} from '@vue/composition-api';
import ContestSubmission from '@/components/molecules/ContestSubmission.vue';
import ContestSubmissionForm from '@/components/molecules/ContestSubmissionForm.vue';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';
import { useGetContestSubmissionQuery, GetContestSubmissionQuery, useGetParticipantVotingDetailsQuery } from '@/generated/graphql';
import { useResult } from '@vue/apollo-composable';
import authComposition from '@/composable/authHandler';

export default defineComponent({
  name: 'ContestGallery',
  components: {
    LoaderSpin,
    ContestSubmission,
    ContestSubmissionForm,
  },
  setup(_, { root }) {
    const {
      isAuthenticated, role,
    } = authComposition(root);
    const {
      result, loading, error, fetchMore,
    } = useGetContestSubmissionQuery({ limit: 6, offset: 0 }, {
      notifyOnNetworkStatusChange: true,
    });

    const auth0_id = ref(root.$auth.user?.sub || '');
    const {
      result: result1,
    } = useGetParticipantVotingDetailsQuery({ auth0_id: auth0_id.value });
    const contestSubmissions = useResult(result, [], (data) => data.contest);

    const participantDetails = useResult(result1, [], (data) => {
      if (!data.participants.length) {
        // Public User
        return {
          id: '0',
          submission: false,
          vote: false,
        };
      }
      return data.participants[0];
    });
    function loadMore() {
      fetchMore({
        variables: {
          offset: result.value.contest.length,
        },
        updateQuery: (previousResult: GetContestSubmissionQuery, { fetchMoreResult }: any) => {
          // No new feed posts
          console.log(previousResult, fetchMoreResult);
          if (!fetchMoreResult) return previousResult;

          // Concat previous feed with new feed posts
          result.value.contest = [
            ...previousResult.contest,
            ...fetchMoreResult.contest,
          ];
          const { contest } = result.value;
          return {
            ...previousResult,
            contest,
          };
        },
      });
    }

    function scrollBehavior(e: any) {
      if ((window.innerHeight + window.scrollY + 5) >= document.body.offsetHeight && !loading.value) {
        console.log('Loading More');
        loadMore();
      }
    }
    onMounted(() => {
      window.addEventListener('scroll', scrollBehavior);
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', scrollBehavior);
    });

    return {
      loading,
      error,
      loadMore,
      contestSubmissions,
      participantDetails,
      isAuthenticated,
      role,
    };
  },
});
</script>
