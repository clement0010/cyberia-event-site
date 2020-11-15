import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Profile from '@/views/Profile.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contest-gallery',
    name: 'Contest Gallery',
    component: () => import('../views/ContestGallery.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/cyberia-event-site/',
});

export default router;
