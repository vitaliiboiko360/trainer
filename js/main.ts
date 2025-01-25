import { createApp } from 'vue';

import router from '../src/router/router';

import App from '../src/App.vue';

import { VueQueryPlugin } from '@tanstack/vue-query';

import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(vuetify);
app.use(router);
app.mount('#app');
