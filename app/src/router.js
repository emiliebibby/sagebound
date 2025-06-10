import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ResetPassword from './components/ResetPassword.vue';
import HelloWorld from './components/HelloWorld.vue';
import { auth } from './firebase';

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword },
  { path: '/', name: 'Home', component: HelloWorld, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const user = auth.currentUser;
  if (requiresAuth && !user) {
    next({ name: 'Login' });
  } else if ((to.name === 'Login' || to.name === 'Register') && user) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
