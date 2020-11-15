<template>
  <div>
    <LoaderSpin v-if="loading" />
    <p v-else-if="error">Error</p>
    <ProfileCard
      v-else
      :profile="profile"
      :loading="loading"
    />

    <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Pick an avatar"
      prepend-icon="mdi-camera"
      label="Avatar"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useResult } from '@vue/apollo-composable';
import { useGetOneParticipantDetailsQuery } from '@/generated/graphql';
import ProfileCard from '@/components/organisms/ProfileCard.vue';
import LoaderSpin from '@/components/atoms/LoaderSpin.vue';
import generateV4SignedPolicy from '@/services/fileSystem';

interface Image {
  size: number;
}

export default defineComponent({
  name: 'Profile',
  components: {
    ProfileCard,
    LoaderSpin,
  },
  data: () => ({
    rules: [
      (value: Image) => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
    ],
  }),
  setup() {
    const { result, loading, error } = useGetOneParticipantDetailsQuery();
    const profile = useResult(result, null, (data) => data.participants[0]);
    generateV4SignedPolicy('test').catch(console.error);

    // const selectedFile = ref();
    // function onFileSelected(event: any) {
    //   const file = event.target.files[0];
    //   return file;
    // }

    // function onUpload(event: File) {
    //   console.log(event);
    //   // selectedFile.value = onFileSelected(event);
    //   const fd = new FormData();
    //   fd.append('image', event, event.name);
    //   console.log(fd);
    // }

    console.log(profile, 'USER PROFILE');
    return {
      profile,
      loading,
      error,
    };
  },
});
</script>
