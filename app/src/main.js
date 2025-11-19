import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import sageboundTheme from './theme/sagebound-theme';

// PrimeVue Components (register globally for auth pages)
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

// PrimeVue CSS
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Sagebound Custom Styles
import './assets/sagebound-custom.css';

// Auth Store
import { useAuthStore } from './stores/auth';

const app = createApp(App);
const pinia = createPinia();

// Use Pinia first
app.use(pinia);

// Configure PrimeVue with Sagebound theme
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      ...sageboundTheme,
      darkModeSelector: '[data-theme="dark"]',
      cssLayer: false
    }
  }
});

// Register PrimeVue components globally
app.component('InputText', InputText);
app.component('Password', Password);
app.component('Button', Button);

// Initialize auth state before mounting
const authStore = useAuthStore();
authStore.initAuth().then(() => {
  app.use(router);
  app.mount('#app');
});
