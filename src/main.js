import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
    // .use(VueSocketio, socketio("https://cosmic-chat-server.siongsng.repl.co/"))
    .use(store)
    .use(router)
    .mount('main')
