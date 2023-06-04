import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store/store'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives
});





// tailwind css
import './assets/styles/css/tailwind.css'
import './assets/styles/scss/v-select-custom.scss';
import './assets/styles/scss/v-text-field-custom.scss';

const app = createApp(App)

app.use(router).use(store).use(vuetify).mount('#app')
