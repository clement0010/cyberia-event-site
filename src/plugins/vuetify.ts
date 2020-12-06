import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      dark: {
        primary: '#7f7f7f',
        secondary: '#DADADA',
        anchor: '#8c9eff',
      },
    },
    dark: true,
  },
};

export default new Vuetify(opts);
