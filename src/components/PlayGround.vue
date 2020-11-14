/*eslint linebreak-style: ["error", "windows"]*/
<template>
  <div>
    {{ profile.name }}
    {{ profile.description }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    profile: {
      type: Object,
      default() {
        return {
          name: 'Cyberia 2020',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae dolor commodi ullam alias eos 
                    explicabo impedit repellat maiores iusto, asperiores quasi, veritatis at tenetur, ut obcaecati ex id ratione!`,
        };
      },
    },
  },
});
</script>
