import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contributor from '@/views/Contributor.vue'
import Assistance from '@/views/Assistance/Assistance.vue'
import Tutorials from '@/views/Assistance/Tutorials.vue'
import ProgressQuery from '@/views/ProgressQuery.vue'

/* Wiki */
import WikiMenuList from '@/views/Wiki/index.vue'

/* error */
import NotFound from '@/views/errors/404.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/about',
        name: 'About',
        component: About
    }, {
        path: "/Contributor",
        name: "Contributor",
        component: Contributor
    }, {
        path: "/Translation-assistance",
        name: "/Assistance",
        component: Assistance
    }, {
        path: "/Translation-assistance/Translation-Tutorials",
        name: "/Tutorials",
        component: Tutorials
    }, {
        path: "/ProgressQuery",
        name: "ProgressQuery",
        component: ProgressQuery
    }, {
        path: '/Wiki',
        name: "WikiMenuList",
        component: WikiMenuList,
        meta: {
            title: "目前還在測試中"
        }
    }, {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((data, from, next) => {
    document.title = data.meta.title || document.title
    next()
})
export default router
