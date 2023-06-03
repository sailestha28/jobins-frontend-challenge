import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './assets/styles/css/tailwind.css';
// import './assets/styles/scss/app.scss';

const app = createApp(App)

app.use(router).use(store).mount('#app')
