<template>
    <div id="wikiMenuList">
        <ul v-for="data in menuList" :key="data">
            <h4>{{ data.title }}</h4>
            <li v-for="_data in data.names" :key="_data" group>
                <a class="menuList_" :href="`#${_data.url}`">{{ _data.title }}</a>
            </li>
        </ul>
    </div>
    <div class="wiki"></div>
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
    methods: {},
    mounted() {
        /* eslint-disable-next-line no-unused-vars */
        for (let i of $("a[href].menuList_")) new IntersectionObserver((e =>
            console.log($(e[0].target).attr("href"))
        ), {
            rootMargin: "-20% 0px"
        }).observe(i);
        // document.querySelectorAll("a").forEach(type => { observer.observe(type) });
        // console.log(document.querySelectorAll("a"))
        // for (let i in menuList) {
        //     for (b in i.names) {
        //         console.log(b)
        //         $("").append("")
        //     }
        // }
    }
};
</script>

<style lang="scss" scoped>
</style>