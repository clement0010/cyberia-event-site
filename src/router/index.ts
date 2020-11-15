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
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },

];

const router = new VueRouter({
  routes,
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  base: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_URL : '/',
});

export default router;
