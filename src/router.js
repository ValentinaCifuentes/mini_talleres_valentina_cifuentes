import { createRouter, createWebHistory } from 'vue-router';
import Ruta1 from './views/Ruta1.vue';
import Ruta2 from './views/Ruta2.vue';
import Ruta3 from './views/Ruta3.vue';
import Ruta4 from './views/Ruta4.vue';
import Ruta5 from './views/Ruta5.vue';
import Main from './views/Main.vue';

const routes = [
  { path: '/', redirect: '/main' },
  { path: '/main', component: Main },
  { path: '/ruta1', component: Ruta1 },
  { path: '/ruta2', component: Ruta2 },
  { path: '/ruta3', component: Ruta3 },
  { path: '/ruta4', component: Ruta4 },
  { path: '/ruta5', component: Ruta5 }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
