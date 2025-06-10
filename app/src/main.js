import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './router';

const app = createApp(App);
app.use(PrimeVue);
app.component('InputText', () => import('primevue/inputtext'));
app.component('Password', () => import('primevue/password'));
app.component('Button', () => import('primevue/button'));
app.use(router);
app.mount('#app');
