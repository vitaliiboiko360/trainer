import { createApp } from 'vue';

import router from '../src/router/router';

import App from '../src/App.vue';

import { VueQueryPlugin } from '@tanstack/vue-query';

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import colors from 'vuetify/util/colors';
import { createVuetify } from 'vuetify';
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          'surface-variant': colors.indigo.lighten2, //rgb(96, 143, 160)
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(vuetify);
app.use(router);
app.mount('#app');
