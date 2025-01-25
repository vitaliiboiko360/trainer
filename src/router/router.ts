import { createRouter, createWebHistory } from 'vue-router';

import Home from '../Home.vue';
import PageEntryPoint from '../page/PageEntryPoint.vue';
import AdminHome from '../admin/AdminHome.vue';
import AdminEditLesson from '../admin/AdminEditLesson.vue';

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
  { path: '/admin', component: AdminHome },
  { path: '/admin/edit/lesson-:id', component: AdminEditLesson },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
