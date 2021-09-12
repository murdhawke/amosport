import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
require('@/assets/main.scss');

import './assets/custom.css'

createApp(App).use(router).mount('#app')
