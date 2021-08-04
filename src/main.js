import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'

window.$ = window.jQuery = jQuery

createApp(App)
    .use(router)
    .mount('#app')
