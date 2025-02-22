import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos';
import $i18n from '@/plugins/i18n';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/style/main.scss';
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(createPinia())
app.use(router);
app.use($i18n);
AOS.init();
app.mount('#app');
