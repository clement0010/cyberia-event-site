<template>
  <div class="home">
    Home
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useQuery, useSubscription } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default defineComponent({
  name: 'Home',
  setup() {
    const { result } = useQuery(
      gql`query MyQuery {
  users {
    name
    id
  }
}
`,
    );
    const result1 = useSubscription(
      gql`subscription MyQuery {
  users {
    name
    id
  }
}
`,
    );
    console.log(result, 'query');
    console.log(result1.result, 'websocket');
  },
});
</script>
