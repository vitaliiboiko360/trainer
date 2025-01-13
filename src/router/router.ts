import { createRouter, createWebHistory } from 'vue-router';

import Home from '../Home.vue';
import PageEntryPoint from '../page/PageEntryPoint.vue';

const routes = [
  { path: '/', component: Home },
  {
    path: '/lesson-:id',
    component: PageEntryPoint,
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
