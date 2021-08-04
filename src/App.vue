<template>
    <Header />
    <router-view/>
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
    width: 100%;
    height: 100%;
}
</style>
