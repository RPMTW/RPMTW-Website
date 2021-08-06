<template>
    <div id="wikiMenuList">
        <div class="scroll">
            <ul v-for="data in menuList" :key="data">
                <router-link class="link" :to="'/wiki' + data.url">
                    <h4>{{ data.title }}</h4>
                </router-link>
                <li v-for="_data in data.names" :key="_data" group>
                    <a class="menuList_" :href="`#${_data.url}`">{{ _data.title }}</a>
                </li>
            </ul>
        </div>
        <router-view class="view"></router-view>
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
    }
};
</script>

<style lang="scss" scoped>
#wikiMenuList {
    height: 100%;
    display: flex;
    .scroll {
        position: fixed;
        top: 52px;
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
    ul {
        li {
            list-style-type: none;
            margin: 15px 0 15px 8%;
        }
    }
}
</style>