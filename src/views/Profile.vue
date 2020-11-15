<template>
  <div>
    <LoaderSpin v-if="loading" />
    <p v-else-if="error">Error</p>
    <v-container class="pt-10">
      <h1 class="text-center">
        Profile
      </h1>
      <div class="mb-10">
        <v-row justify="center">
          <v-col cols="2">
            <v-img
              :src="profile.team.picture_url"
              max-width="175"
            />
          </v-col>
          <v-col cols="9">
            <div class="text-subtitle-1">
              <strong>{{ profile.name }}</strong><br>
              Full name<br>
              {{ profile.description }}<br>
              {{ profile.role }} in   {{ profile.team.name }}<br>
            </div>
          </v-col>
          <v-col cols="1">
            <edit-profile-form />
          </v-col>
        </v-row>
      </div>
      <h1 class="text-center">
        My team
      </h1>
      <v-row>
        <v-col cols="12">
          <div class="text-subtitle-1">
            <strong>{{ profile.team.name }}</strong><br>
            {{ profile.team.description ? profile.team.description : `Team description` }}<br>
            Score: 250/1000<br>
          </div>
        </v-col>
        <v-col
          cols="12"
          justify="center"
        >
          <v-progress-linear
            :value="skill"
            color="secondary"
            height="15"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useResult } from '@vue/apollo-composable';
import { useGetOneParticipantDetailsQuery } from '@/generated/graphql';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';
import EditProfileForm from '@/components/molecules/EditProfileForm.vue';

export default defineComponent({
  name: 'Profile',
  components: {
    EditProfileForm,
    LoaderSpin,
  },

  data: () => ({
    skill: 25,
  }),

  setup() {
    const { result, loading, error } = useGetOneParticipantDetailsQuery();
    const profile = useResult(result, null, (data) => data.participants[0]);

    return {
      profile,
      loading,
      error,
    };
  },
});
</script>
