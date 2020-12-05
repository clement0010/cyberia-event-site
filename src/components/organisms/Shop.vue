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
              <th class="text-left">
                Description
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Picometer Microscope</td>
              <td>
                <p>
                  Gives you the names of three crewmates in your team.
                </p>
                <p class="font-italic">
                  This microscope is so precise it can help you identify your true allies.
                  Unfortunately some of its parts were damaged, so it has limited capacity.
                </p>
              </td>
              <td>
                <v-btn @click="buyPicometerMicrosope">
                  Buy (80 pts)
                </v-btn>
              </td>
            </tr>
            <tr>
              <td>Viewfinder</td>
              <td>
                <p>
                  Gives you a clue to help you find the impostor.
                </p>
                <p class="font-italic">
                  A peculiar viewfinder which can detect impostor trails.
                </p>
              </td>
              <td>
                <v-btn @click="buyPicometerMicrosope">
                  Buy (80 pts)
                </v-btn>
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

export default defineComponent({
  name: 'Shop',

  components: {
  },

  setup() {
    function buyPicometerMicrosope() {
      const a = 1;
    }

    function buyViewfinder() {
      const b = 2;
    }

    return {
      buyPicometerMicrosope,
      buyViewfinder,
    };
  },
});
</script>
