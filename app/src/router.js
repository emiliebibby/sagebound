import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './stores/auth';

// Auth Components
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ResetPassword from './components/ResetPassword.vue';

// Main Views
import HomeView from './views/HomeView.vue';
import DiscoverView from './views/DiscoverView.vue';
import LibraryView from './views/LibraryView.vue';
import FavoritesView from './views/FavoritesView.vue';
import ProfileView from './views/ProfileView.vue';

const routes = [
  // Auth routes
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword },

  // Protected main routes
  { path: '/', name: 'Home', component: HomeView, meta: { requiresAuth: true } },
  { path: '/discover', name: 'Discover', component: DiscoverView, meta: { requiresAuth: true } },
  { path: '/library', name: 'Library', component: LibraryView, meta: { requiresAuth: true } },
  { path: '/favorites', name: 'Favorites', component: FavoritesView, meta: { requiresAuth: true } },
  { path: '/profile', name: 'Profile', component: ProfileView, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login' });
  } else if ((to.name === 'Login' || to.name === 'Register') && authStore.isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
