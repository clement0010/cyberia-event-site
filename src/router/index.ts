import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Itinerary from '@/components/organisms/Itinerary.vue';
import Faq from '@/components/organisms/Faq.vue';
import GeneralInfo from '@/components/organisms/GeneralInfo.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/information-page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/InformationPage.vue'),
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: 'general',
        component: GeneralInfo,
      },
      {
        path: 'faq',
        component: Faq,
      },
      {
        path: 'itinerary',
        component: Itinerary,
      },
    ],
  },
  {
    path: '/contest-gallery',
    name: 'ContestGallery',
    component: () => import('../views/ContestGallery.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: () => import('../views/Leaderboard.vue'),
    meta: {
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  routes,
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  base: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_URL : '/',
});

export default router;
