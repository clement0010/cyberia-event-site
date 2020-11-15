<template>
  <NavigationBar />
</template>

<script lang="ts">
import NavigationBar from '@/components/organisms/NavBar.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'App',

  components: {
    NavigationBar,
  },

  data: () => ({
    //
  }),
});
</script>
