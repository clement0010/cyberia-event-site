<template>
  <v-container fluid>
    <day-itinerary
      day="1"
      :items="dayOnePrograms"
    />
    <day-itinerary
      day="2"
      :items="dayTwoPrograms"
    />
    <day-itinerary
      day="3"
      :items="dayThreePrograms"
    />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import DayItinerary from '../molecules/DayItinerary.vue';

export default defineComponent({
  name: 'Itinerary',

  components: {
    DayItinerary,
  },

  data: () => ({
    dayOnePrograms: [{
      time: '0930 – 1000',
      duration: '30 min',
      program: 'Participants join zoom',
    }, {
      time: '1000 – 1100',
      duration: '1 hr',
      program: 'Opening speech + briefing',
    }, {
      time: '1100 – 1145',
      duration: '45 min',
      program: 'Ice-breakers',
    }, {
      time: '1145 – 1245',
      duration: '1 hr',
      program: 'Lunch',
    }, {
      time: '1245 – 1445',
      duration: '2 hr',
      program: 'Training',
    }, {
      time: '1445 - 1500',
      duration: '15 min',
      program: 'Break',
    }, {
      time: '1500 - 1700',
      duration: '2 hr',
      program: 'Training',
    }, {
      time: '1700 - 1715',
      duration: '15 min',
      program: 'Break',
    }, {
      time: '1715 - 1830',
      duration: '1 hr 15 min',
      program: 'Chivalry of Space',
    }, {
      time: '1830 - 1945',
      duration: '1 hr 15 min',
      program: 'Dinner',
    }, {
      time: '1945 – 2145',
      duration: '2 hr',
      program: 'Night training',
    }, {
      time: '2145 – 2230',
      duration: '45 min',
      program: 'Virtual Firecamp',
    }],
    dayTwoPrograms: [{
      time: '0945 – 1000',
      duration: '15 min',
      program: 'Participants join zoom',
    }, {
      time: '1000 – 1200',
      duration: '2 hr',
      program: 'Training',
    }, {
      time: '1200 – 1300',
      duration: '1 hr',
      program: 'Lunch',
    }, {
      time: '1300 - 1500',
      duration: '2 hr',
      program: 'Training',
    }, {
      time: '1500 – 1530',
      duration: '30 min',
      program: 'Break',
    },
    {
      time: '1530 - 1630',
      duration: '1 hr',
      program: 'Additional Training Session by Night Training team',
    },
    {
      time: '1630 - 1645',
      duration: '15 min',
      program: 'Competition briefing',
    },
    {
      time: '1645 - 1845',
      duration: '2 hr',
      program: 'Competition',
    }, {
      time: '1845 - 2000',
      duration: '1 hr 15 min',
      program: 'Dinner',
    }, {
      time: '2000 - 2130',
      duration: '1 hr 30 min',
      program: 'Space Warfare',
    }, {
      time: '2145 – 2230',
      duration: '45 min',
      program: 'Virtual Firecamp',
    }],
    dayThreePrograms: [{
      time: '0945 – 1000',
      duration: '15 min',
      program: 'Participants join zoom',
    }, {
      time: '1000 – 1030',
      duration: '30 min',
      program: 'Emergency meeting!',
    }, {
      time: '1030 – 1130',
      duration: '1 hr',
      program: 'Closing ceremony + Announcement of winners',
    }],
  }),
});
</script>
