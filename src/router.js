import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Home/Index.vue';
import Rounds from './views/Home/Rounds.vue';
import GoldXP from './views/Home/GoldXP.vue';
import Champions from './views/Champions.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/rounds',
      name: 'rounds',
      component: Rounds,
    },
    {
      path: '/goldXP',
      name: 'goldXP',
      component: GoldXP,
    },
    {
      path: '/champions',
      name: 'champions',
      component: Champions,
    },
  ],
});
