import Vue from 'vue';
import VueCompositionApi, { provide } from '@vue/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';
import VueApollo from 'vue-apollo';
import { domain, clientId } from '../auth.config.json';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import apolloClient from './plugins/apollo';
import { Auth0Plugin } from './plugins/auth0/auth';

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState: any) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : '/',
    );
  },
});

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(VueApollo);

new Vue({
  router,
  vuetify,
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  created() {
    if (sessionStorage.redirect) {
      const { redirect } = sessionStorage;
      delete sessionStorage.redirect;
      this.$router.push(redirect);
    }
  },
  render: (h) => h(App),
}).$mount('#app');
