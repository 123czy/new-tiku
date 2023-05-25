import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './assets/js/setting.js';
import './assets/styles/border.css';
import './assets/styles/iconfont.css';
import './assets/styles/reset.scss';

createApp(App).use(store).use(router).mount('#app')
