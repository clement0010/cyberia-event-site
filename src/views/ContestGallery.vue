<template>
  <v-container>
    <LoaderSpin v-if="loading" />
    <p v-if="error">Error! {{ mode === 'production' ? 'Something is wrong, please refresh!' : error }}</p>
    <div
      v-else
    >
      <div class="my-10">
        <h1 class="text-center">
          Contest Gallery
        </h1><br>
        <div v-if="!isAuthenticated">
          <p class="text-center">
            <a @click="login">Login</a> to vote for your favourite submission!
          </p>
        </div>
        <div v-if="isAuthenticated && !participantDetails.vote">
          <p
            v-if="role !== 'admin'"
            class="text-center">
            You have already voted, or voting is closed!
          </p>
        </div>
        <div v-if="isAuthenticated && participantDetails.vote">
          <p class="text-center">
            Vote for your favourite submission here!
          </p>
        </div>
        <v-row justify="center">
          <div class="my-5">
            <contest-submission-form
              v-if="participantDetails.submission && role !== 'admin' && isAuthenticated"
              :participant-id="participantDetails.id"
            />
            <div
              class="my-5"
              v-if="isAuthenticated && role !== 'admin'"
            >
              <v-btn
                target=_blank
                href="https://drive.google.com/drive/folders/1ZfXT5fvLxFvrMuZ0Rqlpw7RS8D3Ffox_?usp=sharing"
                large
                color="primary"
                class="white--text"
              >Submit psd file</v-btn>
            </div>
            <div
              v-if="participantDetails.id === '0'"
              class="text-center"
            ><v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="help"
                >
                  I need Help!
                </v-btn>
              </template>
              <span>{{ message }}</span>
            </v-tooltip></div>
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
      <div
        v-if="contestSubmissions.length === 0"
        class="text-center font-italic"
      >Wow, such empty</div>
      <v-row justify="center" />
      <v-fab-transition>
        <v-btn
          v-show="showButton"
          v-scroll="onScroll"
          color="#8B0000"
          dark
          absolute
          bottom
          right
          fab
          elevation="3"
          class="mb-15 mr-3"
          @click="toTop"
        >
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent, onUnmounted, onMounted, ref, watch,
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
    const mode = ref(process.env.NODE_ENV);

    const {
      login, isAuthenticated, role, auth0_id,
    } = authComposition(root);
    const {
      result, loading, error, fetchMore,
    } = useGetContestSubmissionQuery({ limit: 6, offset: 0 }, {
      notifyOnNetworkStatusChange: true,
    });

    // Refresh page bug
    // const auth0_id = ref(root.$auth.user?.sub);
    const {
      result: result1, refetch,
    } = useGetParticipantVotingDetailsQuery({ auth0_id: auth0_id.value });
    const contestSubmissions = useResult(result, [], (data) => data.contest);
    const participantDetails = useResult(result1, [], (data) => {
      const watcher = setInterval(() => {
        if (isAuthenticated) {
          refetch({ auth0_id: auth0_id.value });
          clearInterval(watcher);
        }
      }, 1000);
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

    const showButton = ref(false);
    function onScroll(e: Event) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || (e.target as Element).scrollTop || 0;
      showButton.value = top > 20;
    }

    function toTop() {
      root.$vuetify.goTo(0);
    }

    const message = ref('If you are certain that you have logged in. Please click me!');

    function help() {
      refetch({ auth0_id: auth0_id.value });
    }

    return {
      help,
      message,
      loading,
      error,
      loadMore,
      contestSubmissions,
      participantDetails,
      login,
      isAuthenticated,
      role,
      showButton,
      onScroll,
      toTop,
      mode,
    };
  },
});
</script>
