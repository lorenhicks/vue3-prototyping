import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
/* eslint-disable */
// @ts-ignore
import { FontAwesomeIcon } from './plugins/font-awesome'
/* eslint-enable */

const app = createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon)
app.config.globalProperties.$log = console.log
app.mount('#app')
