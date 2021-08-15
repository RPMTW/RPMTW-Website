import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from "vue-gtag-next";

createApp(App)
    .use(store)
    .use(router)
    .use(VueGtag, {
        property: {
            id: "G-JS3XKB3H80"
        }
    })
    .mount('main')