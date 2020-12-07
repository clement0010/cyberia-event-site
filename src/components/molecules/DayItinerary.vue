<template>
  <v-col cols="12">
    <h2 class="text-center align-center">Day {{ day }}</h2>
    <div class="my-5" />
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th
              class="text-center text-subtitle-1"
            >
              Time
            </th>
            <th
              class="text-center text-subtitle-1"
            >
              Duration
            </th>
            <th class="text-center text-subtitle-1">
              Program
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in items"
            :key="index"
          >
            <td
              class="text-center"
              width="200em"
            >
              {{ item.time }}
            </td>
            <td
              class="text-center"
              width="200em"
            >
              {{ item.duration }}
            </td>
            <td
              class="text-center"
              width="300em"
            >
              {{ item.program }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'DayItinerary',
  components: {
  },
  props: {
    day: {
      type: String,
      default: () => 0,
    },
    items: {
      type: Array,
      default: () => [{
        time: '0800-0900',
        duration: '1 hr',
        program: 'Wake up',
      }],
    },
  },
});
</script>
