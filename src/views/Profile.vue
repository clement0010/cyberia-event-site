<template>
  <div>
    <v-container class="pt-10">
      <h1 class="text-center">
        Profile
      </h1>
      <div class="mb-10">
        <v-row justify="center">
          <v-col cols="2">
            <v-img src="../assets/stock-photo.png" maxWidth="175" />
          </v-col>
          <v-col cols="9">
            <div class="text-subtitle-1">
              <strong>Username</strong><br>
              Full name<br>
              Description<br>
              Team<br>
            </div>
          </v-col>
          <v-col cols="1">
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
            <strong>Team name</strong><br>
            Team description<br>
            Score: 250/1000<br>
          </div>
        </v-col>
        <v-col cols="12" justify="center">
          <v-progress-linear
            v-model="skill"
            color="secondary"
            height="15"
          >
          </v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import EditProfileForm from '@/components/EditProfileForm.vue';

export default defineComponent({
  name: 'Profile',

  components: {
    EditProfileForm,
  },

  data: () => ({
    skill: 25,
  }),
});
</script>
