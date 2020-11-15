<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      />
    </template>

    <v-img
      height="250"
      :src="profile.team.picture_url"
    />

    <v-card-title>{{ profile.name }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        />

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting
        with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  props: {
    profile: {
      type: Object,
      default: () => ({
        description: 'TEST',
        name: 'LOREM_IPSUM',
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
