import { createApp } from 'vue';
import App from '../src/App.vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
const app = createApp(App);
VueQueryPlugin.install(app);
app.mount('#app');
