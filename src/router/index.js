import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Sign in',
    component: Login,
  },
  {
    path: '/register',
    name: 'Sign up',
    component: Register,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
