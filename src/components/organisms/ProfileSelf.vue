<template>
  <v-container>
    <h1 class="text-center">
      Profile
    </h1>
    <div class="my-5">
      <v-row justify="center">
        <v-col
          cols="6"
          md="2"
        >
          <v-img
            :src="profile.team.picture_url"
            max-width="100vw"
          />
        </v-col>
        <v-col
          cols="6"
          md="9"
        >
          <div class="text-subtitle-1">
            <strong>{{ profile.name }}</strong><br>
            Full name<br>
            Description: {{ profile.description }}<br>
            {{ profile.role }} in  {{ profile.team.name }}<br>
            Score: {{ profile.score }}<br>
            Contribution: {{ profile.contribution }}<br>
            Picometer Hint: {{ profile.picometer_hint }}<br>
            Viewfinder Hint: {{ profile.viewfinder_hint }}<br>
          </div>
          <div />
          <div />
          <div />
        </v-col>
        <v-col
          cols="12"
          md="1"
        >
          <EditProfileForm
            :description="profile.description"
            :username="profile.name"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import EditProfileForm from '@/components/molecules/EditProfileForm.vue';

export default defineComponent({
  name: 'SelfProfile',

  components: {
    EditProfileForm,
  },

  props: {
    profile: {
      type: Object,
      default: () => ({
        name: 'LOREM_IPSUM',
        description: 'TEST123',
        role: 'CREWMATE',
        team_id: '1b03aa8e-0937-42c7-b8f1-27c21c47aabb',
        user_id: 'auth0|12345678910',
        score: 0,
        contribution: 0,
        team: {
          motto: 'TEST_MOCK_OG_1',
          name: 'MOCK_OG_!',
          picture_url: 'https://picsum.photos/200/300',
          scores: [{ score: 50 }],
        },
      }),
    },
  },
});
</script>
