<template>
  <v-container class="mt-5">
    <h1 class="text-center">
      Artifact Shop
    </h1>
    <v-row
      justify="center"
      class="my-5"
    >
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Item
              </th>
              <th
                class="text-left"
                v-if="!$vuetify.breakpoint.xs"
              >
                Description
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>
                  {{ picometer.name }}
                  <artifact-info
                    v-if="$vuetify.breakpoint.xs"
                    :itemName="picometer.name"
                    :ability="picometer.ability"
                    :description="picometer.description"
                  />
                </span>
              </td>
              <td v-if="!$vuetify.breakpoint.xs">
                <p>
                  {{ picometer.ability }}
                </p>
                <p class="font-italic">
                  {{ picometer.description }}
                </p>
              </td>
              <td>
                <div class="mx-4">
                  <buy-picometer :bought="true" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  {{ viewfinder.name }}
                  <artifact-info
                    v-if="$vuetify.breakpoint.xs"
                    :itemName="viewfinder.name"
                    :ability="viewfinder.ability"
                    :description="viewfinder.description"
                  />
                </span>
              </td>
              <td v-if="!$vuetify.breakpoint.xs">
                <p>
                  {{ viewfinder.ability }}
                </p>
                <p class="font-italic">
                  {{ viewfinder.description }}
                </p>
              </td>
              <td>
                <div class="mx-4">
                  <buy-viewfinder :bought="false" />
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import BuyPicometer from '../molecules/BuyPicometer.vue';
import BuyViewfinder from '../molecules/BuyViewfinder.vue';
import ArtifactInfo from '../molecules/ArtifactInfo.vue';

export default defineComponent({
  name: 'Shop',

  components: {
    BuyPicometer,
    BuyViewfinder,
    ArtifactInfo,
  },

  setup() {
    const picometer = {
      name: 'Picometer Microscope',
      ability: 'Gives you the names of three crewmates in your team.',
      description: 'This microscope is so precise it can help you identify your true allies. '
        + 'Unfortunately some of its parts were damaged, so it has limited capacity.',
    };
    const viewfinder = {
      name: 'Viewfinder',
      ability: 'Gives you a clue to help you find the impostor.',
      description: 'A peculiar viewfinder which can detect impostor trails.',
    };

    return {
      picometer,
      viewfinder,
    };
  },
});
</script>
