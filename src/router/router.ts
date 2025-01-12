import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from 'vue-router';

import Page from '../page/Page.vue';
import App from '../App.vue';
import Home from '../Home.vue';

const routes = [
  { path: '/', component: Home },
  {
    path: '/lesson-:id',
    component: Page,
    props: (route) => ({
      resource: route.query.resource,
      id: route.params.id,
    }),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
