import { createRouter, createWebHistory } from 'vue-router'

/* wiki */
import QandA from '@/views/Wiki/QandA.vue' // 常見問題

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/views/Home.vue"),
        meta: {
            breadcrumb: "Home",
        },
    }, {
        path: '/about',
        name: 'About',
        component: () => import("@/views/About.vue"),
        meta: {
            breadcrumb: "About",
        },
    }, {
        path: "/Contributor",
        name: "Contributor",
        component: () => import("@/views/Contributor.vue"),
        meta: {
            breadcrumb: "Contributor",
        },
    }, {
        path: "/Translation-assistance",
        name: "Assistance",
        component: () => import("@/views/Assistance/Assistance.vue"),
        meta: {
            breadcrumb: "Assistance",
        },
    }, {
        path: "/Translation-assistance/Translation-Tutorials",
        name: "Tutorials",
        component: () => import("@/views/Assistance/Tutorials.vue"),
    }, {
        path: "/ProgressQuery",
        name: "ProgressQuery",
        component: () => import("@/views/ProgressQuery.vue"),
        meta: {
            breadcrumb: "ProgressQuery",
        },
    }, {
        path: "/Wiki",
        name: "WikiMenuList",
        meta: {
            breadcrumb: "Wiki",
            notFooter: true
        },
        component: () => import("@/components/WikiMenuList.vue"),
        children: [
            {
                path: "",
                components: {
                    data: QandA
                }
            }, {
                path: "QandA",
                components: {
                    data: QandA
                }
            }, {
                path: "AssistTranslation",
                components: {
                    data: () => import("@/views/Wiki/AssistTranslation.vue")
                }
            }, {
                path: "InstallAndUse",
                components: {
                    data: () => import("@/views/Wiki/InstallAndUse.vue")
                }
            }, {
                path: "ModInfo",
                components: {
                    data: () => import("@/views/Wiki/ModInfo.vue")
                }
            }, {
                path: "OtherInfo",
                components: {
                    data: () => import("@/views/Wiki/OtherInfo.vue")
                }
            },
        ]
    }, {
        path: "/RPMTWUpdateMod",
        name: "RPMTWUpdateMod",
        component: () => import("@/views/RPMTWUpdateMod"),
    }, {
        path: "/install/version",
        name: "Version",
        component: () => import("@/views/Wiki/mod-install/Version.vue"),
        meta: {
            breadcrumb: "Version",
        },
    }, {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("@/views/errors/404.vue"),
        meta: {
            breadcrumb: "ProgressQuery",
        },
    }, {
        path: "/atr1",
        name: "ATR1",
        component: () => import("@/views/Surrounding/ATR1.vue")
    }, {
        path: "/test",
        name: "TEST",
        component: () => import("@/views/test/test-1.vue")
    }, {
        path: "/Partner",
        name: "Partner",
        component: () => import("@/views/Surrounding/Partner.vue"),
        meta: {
            breadcrumb: "Partner",
        },
    }, {
        path: "/RWL",
        name: "Partner",
        component: () => import("@/views/Surrounding/RWL.vue"),
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
