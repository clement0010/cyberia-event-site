<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Game</span>
        </v-card-title>
        <v-card-text>
          <v-select
            label="Team"
            :items="teamsScores"
            item-text="team.name"
            item-value="team_id"
          />
          <v-select
            label="Score"
            :items="scores"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="secondary"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="dialog = false"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api';
import { useUpdateGameScoreMutation } from '@/generated/graphql';
import { useApolloClient } from '@vue/apollo-composable';
import CacheService from '@/services/cacheService';

export default defineComponent({
  name: 'EditGameForm',

  props: {
    teamsScores: {
      type: Array,
      default: () => [],
    },
    scores: {
      type: Array,
      default: () => ['0', '250', '500', '750', '1000'],
    },
  },

  setup(props) {
    // Create apollo client for caching purposes
    const { resolveClient } = useApolloClient();
    const client = resolveClient();

    const dialog = ref(false);
    const scores = reactive({
      team_scores: props.teamsScores || [],
    });

    const { mutate: updateDetails } = useUpdateGameScoreMutation(() => ({}));
    function saveWrapper() {
      dialog.value = false;
      console.log('Updated scores', scores);
    }
    return {
      dialog,
    };
  },
});
</script>
