import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import store from './store'

window.$ = window.jQuery = jQuery



createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
