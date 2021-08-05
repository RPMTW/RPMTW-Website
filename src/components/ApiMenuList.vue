<template>
    <div id="apiMenuList">
        <ul v-for="data in menuList" :key="data">
            <h4>{{ data.title }}</h4>
            <li v-for="_data in data.names" :key="_data">
                <a :href="_data.url">{{ _data.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
/* eslint-disable no-undef */
let menuList = require("@/data/WikiMenu")

export default {
    name: "apiMenuList",
    data() {
        return {
            menuList: menuList
        };
    },
    methods: {}
};
$(function () {
    for (let i of menuList) {
        console.log(i.title)
        for (let b of i.names) {
            console.log(b)
        }
    }
})
</script>

<style lang="scss" scoped>
</style>