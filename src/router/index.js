import {
    createRouter,
    createWebHistory
} from 'vue-router'

/* wiki */
import QandA from '@/views/Wiki/QandA.vue' // 常見問題

const defaultDescription = "RPMTW致力於推廣Minecraft中文社群與開發相關工具，期望能讓Minecraft玩家有更好的體驗。";
const defaultKeywords = ["RPMTW", "minecraft", "菘菘", "中文化", "麥塊", "繁體中文", "模組"];

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue"),
    meta: {
        breadcrumb: "Home",
        title: "RPMTW - 首頁"
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
        notFooter: true,
        title: "RPMTW - 維基百科"
    },
    component: () => import("@/components/WikiMenuList.vue"),
    children: [{
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
    },]
}, {
    path: "/RPMTWUpdateMod",
    name: "RPMTWUpdateMod",
    meta: { title: "RPMTW 自動中文化更新模組" },
    component: () => import("@/views/RPMTWUpdateMod"),
}, {
    path: "/install/version",
    name: "version",
    component: () => import("@/views/Wiki/mod-install/Version.vue"),
    meta: {
        breadcrumb: "Version",
        title: "下載模組",
        description: "下載 RPMTW 自動中文化更新模組",
        keywords: ["自動中文化", "漢化", "下載", "Forge", "Fabric", "Download", "1.12", "1.16", "1.17"]
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
        title: "合作夥伴",
    },
}, {

    path: "/RWL",
    name: "RWL",
    meta: {
        title: "RPMLauncher",
    },
    component: () => import("@/views/Products/RPMLauncher/RWL.vue"),
}, {

    path: "/RWL/Version",
    name: "RWL-Version",
    component: () => import("@/views/Products/RPMLauncher/Version.vue"),
}, {
    path: "/Translator",
    name: "Translator",
    component: () => import("@/views/Surrounding/crowdin/Crowdin.vue"),
}, {
    path: "/CosmicChat",
    name: "CosmicChat",
    component: () => import("@/views/Surrounding/Cosmic-Chat.vue")
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((data, from, next) => {
    document.title = data.meta.title || document.title;
    document.head.children.description.content = data.meta.description || defaultDescription;

    let keywords = Array(data.meta.keywords || []);
    keywords.push(defaultKeywords);
    document.head.children.keywords.content = keywords.join(",");
    next()
})
export default router