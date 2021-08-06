import { createRouter, createWebHistory } from 'vue-router'

/* mainRouter */
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contributor from '@/views/Contributor.vue'
import Assistance from '@/views/Assistance/Assistance.vue'
import Tutorials from '@/views/Assistance/Tutorials.vue'
import ProgressQuery from '@/views/ProgressQuery.vue'

/* wiki */
import WikiMenuList from '@/components/WikiMenuList.vue'
import AssistTranslation from '@/views/Wiki/AssistTranslation.vue'
import InstallAndUse from '@/views/Wiki/InstallAndUse.vue'
import ModInfo from '@/views/Wiki/ModInfo.vue'
import OtherInfo from '@/views/Wiki/OtherInfo.vue'
import QandA from '@/views/Wiki/QandA.vue'

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
        path: "/Wiki",
        name: "WikiMenuList",
        component: WikiMenuList,
        meta: {
            title: "目前還在測試中"
        },
        children: [
            {
                path: "AssistTranslation",
                components: {
                    default: AssistTranslation
                }
            }, {
                path: "InstallAndUse",
                components: {
                    default: InstallAndUse
                }
            }, {
                path: "ModInfo",
                component: {
                    default: ModInfo
                }
            }, {
                path: "OtherInfo",
                component: {
                    default: OtherInfo
                }
            }, {
                path: "QandA",
                component: {
                    default: QandA
                }
            }
        ]
    }, {
        path: "/:pathMatch(.*)*",
        name: "not-found",
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
