<template>
    <div id="wikiMenuList">
        <div class="scroll">
            <div class="title user-select">
                <strong class="main-title"><span class="notranslate" style="color: #ff9900;">RPM</span><span
                    style="color: #00ffff;" class="notranslate">TW</span><span style="color: #ff9900;"> Wiki</span></strong>
            </div>
            <ul v-for="data in menuList" :key="data">
                <router-link class="link" :to="'/Wiki' + data.url">
                    <h4 @click="showLi">{{ data.title }}</h4>
                </router-link>
                <li v-for="_data in data.names" :key="_data" class="liHref">
                    <a class="menuList_" :href="`/Wiki${data.url}/#${_data.url}`">{{ _data.title }}</a>
                </li>
            </ul>
        </div>
        <router-view class="view" name="data" />
    </div>
</template>

<script>
/* eslint-disable no-undef */
let menuList = require("@/data/WikiMenu")

export default {
    name: "apiMenuList",
    data() {
        return {
            menuList: menuList,
        };
    },
    methods: {
        showLi(event) {
            console.log($(event.target).parent().parent("ul").find(".liHref"))
        }
    }
};
</script>
<style lang="scss" scoped>
#wikiMenuList {
    height: 100%;
    display: flex;
    .scroll {
        .title  {
            text-align: center;
        }
        padding-top: 20px;
        position: fixed;
        top: 0;
        resize: horizontal;
        padding-right: 10px;
        display: block;
        height: 100%;
        width: 25%;
        overflow: auto;
    }
    .view {
        width: 70%;
        margin-left: calc(25% + 40px);
    }
    .view.home {
        text-align: center;
        font-size: 200%;
        .hr {
            padding-bottom: 50px;
        }
        a[href] {
            color: rgb(36, 146, 236);
        }
    }
    ul {
        font-weight: 900;
        li {
            font-weight: 500;
            list-style-type: none;
            margin: 15px 0 15px 8%;
        }
    }
}
</style>