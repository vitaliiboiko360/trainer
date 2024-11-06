import { createApp } from 'vue';

import router from '../src/router/router';

import App from '../src/App.vue';

import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(router);
app.mount('#app');
