import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from "./router/router.js"
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App)

app.use(router)
app.mount('#app')

AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
});