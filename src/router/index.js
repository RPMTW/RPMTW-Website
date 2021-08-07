import { createRouter, createWebHistory } from 'vue-router'

/* mainRouter */
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contributor from '@/views/Contributor.vue'
import Assistance from '@/views/Assistance/Assistance.vue'
import Tutorials from '@/views/Assistance/Tutorials.vue'
import ProgressQuery from '@/views/ProgressQuery.vue'
import Progress from '@/views/Progress.vue'

/* wiki */
import WikiMenuList from '@/components/WikiMenuList.vue' // Wiki Menu
import AssistTranslation from '@/views/Wiki/AssistTranslation.vue' // 協助翻譯
import InstallAndUse from '@/views/Wiki/InstallAndUse.vue' // 安裝及使用
import ModInfo from '@/views/Wiki/ModInfo.vue' // RPM翻譯更新模組
import OtherInfo from '@/views/Wiki/OtherInfo.vue' // 其他問題
import QandA from '@/views/Wiki/QandA.vue' // 常見問題

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
        name: "Assistance",
        component: Assistance
    }, {
        path: "/Translation-assistance/Translation-Tutorials",
        name: "Tutorials",
        component: Tutorials
    }, {
        path: "/ProgressQuery",
        name: "ProgressQuery",
        component: ProgressQuery
    }, {
        path: "/Wiki",
        name: "WikiMenuList",
        meta: {
            title: "目前還在測試中"
        },
        component: WikiMenuList,
        children: [
            {
                path: "",
                components: {
                    data: QandA
                }
            },
            {
                path: "AssistTranslation",
                components: {
                    data: AssistTranslation
                }
            }, {
                path: "InstallAndUse",
                components: {
                    data: InstallAndUse
                }
            }, {
                path: "ModInfo",
                components: {
                    data: ModInfo
                }
            }, {
                path: "OtherInfo",
                components: {
                    data: OtherInfo
                }
            }, {
                path: "QandA",
                components: {
                    data: QandA
                }
            }
        ]
    }, {
        path: "/Progress",
        name: "Progress",
        component: Progress
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
