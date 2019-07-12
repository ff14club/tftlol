import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Home/Index.vue';
import Rounds from './views/Home/Rounds.vue';
import GoldXP from './views/Home/GoldXP.vue';
import Damage from './views/Home/Damage.vue';
import Reroll from './views/Home/Reroll.vue';
import Synergies from './views/Synergies.vue';
import Champions from './views/Champions.vue';
import Items from './views/Items.vue';

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
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
      path: '/damage',
      name: 'damage',
      component: Damage,
    },
    {
      path: '/reroll',
      name: 'reroll',
      component: Reroll,
    },
    {
      path: '/synergies',
      name: 'synergies',
      component: Synergies,
    },
    {
      path: '/champions',
      name: 'champions',
      component: Champions,
    },
    {
      path: '/items',
      name: 'items',
      component: Items,
    },
  ],
});
