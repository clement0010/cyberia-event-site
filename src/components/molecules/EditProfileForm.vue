<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Edit Profile
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="profile.name"
                  color="white"
                  label="Username"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="profile.description"
                  color="white"
                  label="Description"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="secondary"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            @click="saveWrapper"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">

import { defineComponent, reactive, ref } from '@vue/composition-api';
import { GetOneParticipantDetailsDocument, useUpdateParticipantDetailsMutation } from '@/generated/graphql';
import { useApolloClient } from '@vue/apollo-composable';
import CacheService from '@/services/cacheService';

export default defineComponent({
  name: 'EditProfileForm',

  components: {
  },

  props: {
    description: {
      type: String,
    },
    username: {
      type: String,
    },
  },

  setup(props) {
    // Create apollo client for caching purposes
    const { resolveClient } = useApolloClient();
    const client = resolveClient();

    const dialog = ref(false);
    const profile = reactive({
      name: props.username || '',
      description: props.description || '',
    });

    const { mutate: updateDetails } = useUpdateParticipantDetailsMutation(() => ({}));
    function saveWrapper() {
      dialog.value = false;
      console.log('Updated profile', profile);

      updateDetails(profile).then((result) => {
        // Initiate caching service
        const cache = new CacheService(client);

        const data = cache.read(GetOneParticipantDetailsDocument);
        const participants = result.data.update_participants.returning;
        console.log(data, '=======MUST MATCH STRUCTURE========', { participants });
        cache.write(GetOneParticipantDetailsDocument, { participants });
      });
    }

    return {
      dialog,
      saveWrapper,
      profile,
    };
  },
});
</script>
