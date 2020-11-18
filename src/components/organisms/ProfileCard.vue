<template>
  <v-container class="pt-10">
    <self-profile :profile="profile" />
    <team-profile :team="profile.team" />
  </v-container>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';
import EditProfileForm from '@/components/molecules/EditProfileForm.vue';
import SelfProfile from '@/components/organisms/SelfProfile.vue';
import TeamProfile from '@/components/organisms/TeamProfile.vue';

export default defineComponent({
  components: {
    EditProfileForm,
    SelfProfile,
    TeamProfile,
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
