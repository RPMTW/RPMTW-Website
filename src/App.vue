<template>
    <Header />
    <router-view class="wrapper" />
    <div class="FooterAir"></div>
    <Footer />
</template>
<script>
/* eslint-disable no-undef */

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Main',
    components: {
        Header,
        Footer,
    }
}
</script>
<style lang="scss">
#app {
    display: flex;
    flex-direction: column;
}
/* footer bottom */
html {
    height: 100%;
}
body {
    min-height: calc(100% - 54px);
    display: grid;
    grid-template-rows: 1fr auto;
}
.wrapper {
    flex-grow: 1;
}
.Footer {
    grid-row-start: 2;
    grid-row-end: 3;
}
</style>
