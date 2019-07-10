import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
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
      path: '/champions',
      name: 'champions',
      component: Champions,
    },
  ],
});
