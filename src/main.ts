import Vue from 'vue';
import VueCompositionApi, { provide } from '@vue/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';
import VueApollo from 'vue-apollo';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import apolloClient from './plugins/apollo';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(VueApollo);

new Vue({
  router,
  vuetify,
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: (h) => h(App),
}).$mount('#app');
