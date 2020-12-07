<template>
  <v-container class="pt-10">
    <ProfileSelf :profile="profile" />
    <ProfileTeam
      :team="profile.team"
      :meeting-participants="meetingParticipants"
      :emergency-vote="emergencyVote"
      :dead-participants="deadParticipants"
    />
    <Shop
      v-if="profile.role === 'CREWMATE'"
      :artifact-details="artifactDetails"
    />
    <v-overlay
      color="#8a0303"
      :value="overlay"
    >
      <h1>YOU HAVE BEEN VOTED OUT</h1>
      <v-row
        justify="center"
        class="mt-5"
      >
        <v-btn
          class="black--text"
          x-large
          color="secondary"
          @click="overlay = false"
        >
          OK
        </v-btn>
      </v-row>
    </v-overlay>
  </v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import EditProfileForm from '@/components/molecules/EditProfileForm.vue';
import ProfileSelf from '@/components/organisms/ProfileSelf.vue';
import ProfileTeam from '@/components/organisms/ProfileTeam.vue';
import Shop from '@/components/organisms/Shop.vue';

export default defineComponent({
  components: {
    EditProfileForm,
    ProfileSelf,
    ProfileTeam,
    Shop,
  },

  props: {
    profile: {
      type: Object,
      default: () => ({
        description: null,
        name: 'TEST USER',
        role: 'CREWMATE',
        team_id: 'c15a5929-0564-4e24-8811-930ab511408c',
        user_id: 'auth0|5fca77ed804107007611d218',
        score: 0,
        contribution: 0,
        status: 'ALIVE',
        emergency_vote: false,
        team: {
          motto: 'TEST_MOCK_OG_1',
          name: 'MOCK_OG_!',
          picture_url: 'https://picsum.photos/200/300',
        },
      }),
    },
    meetingParticipants: {
      type: Array,
      default: () => [{
        emergency_vote: false,
        imposter_vote_count: 0,
        name: 'Test User',
        status: 'ALIVE',
        user_id: '0',
        team: {
          number: 0,
        },
      }],
    },
    deadParticipants: {
      type: Array,
      default: () => [],
    },
    artifactDetails: {
      type: Object,
      default: () => ({
        picometer: true,
        viewfinder: true,
        score: 0,
      }),
    },
    emergencyVote: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const overlay = props.profile.status === 'DEAD';
    return {
      overlay,
    };
  },
});
</script>
