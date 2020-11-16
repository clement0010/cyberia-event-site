<template>
  <v-container class="pt-10">
    <h1 class="text-center">
      Profile
    </h1>
    <div class="mb-10">
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
            {{ profile.description }}<br>
            {{ profile.role }} in   {{ profile.team.name }}<br>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="1"
        >
          <EditProfileForm />
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
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';
import EditProfileForm from '@/components/molecules/EditProfileForm.vue';

export default defineComponent({
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
        team: {
          motto: 'TEST_MOCK_OG_1',
          name: 'MOCK_OG_!',
          picture_url: 'https://picsum.photos/200/300',
        },
      }),
    },
    loading: {
      type: Boolean,
      default: () => true,
    },
    skill: {
      type: Number,
      default: () => 25,
    },
  },
  setup(_, { root }) {
    const selection = ref(0);
    function reserve() {
      console.log(selection.value);
      return root.$router.push({ path: '/' });
    }
    return {
      selection,
      reserve,
    };
  },
});
</script>

<style>

</style>
