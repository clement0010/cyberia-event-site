import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: '#0c164f',
        secondary: '#4b1628',
        anchor: '#8c9eff',
      },
    },
    dark: true,
  },
});
