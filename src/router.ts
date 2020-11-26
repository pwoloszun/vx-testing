import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import PageNotFound from '@/components/PageNotFound.vue';

// fundamentals
import customComponentsRoutes from './modules/01-custom-components/routes';
import propsEventsRoutes from './modules/02-props-events/routes';
import customPropsEventsRoutes from './modules/03-custom-props-events/routes';
import todosRoutes from './modules/04-todos/routes';
import filtersRoutes from './modules/05-filters/routes';
import heroesRoutes from './modules/06-heroes/routes';
import citiesRoutes from './modules/07-cities/routes';
import realEstatesRoutes from './modules/08-real-estates/routes';

// vuex
import vuexBasicsRoutes from './modules/11-vuex-basics/routes';
import advTodosRoutes from './modules/16-adv-todos/routes';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  // fundamentals
  ...customComponentsRoutes,
  ...propsEventsRoutes,
  ...customPropsEventsRoutes,
  ...todosRoutes,
  ...filtersRoutes,
  ...heroesRoutes,
  ...citiesRoutes,
  ...realEstatesRoutes,
  // vuex
  ...vuexBasicsRoutes,
  ...advTodosRoutes,
  { path: '*', component: PageNotFound },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
