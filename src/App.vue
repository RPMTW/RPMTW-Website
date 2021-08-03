<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <Header />
    <router-view/>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
    name: 'Main',
    components: {
        Header,
    }
}
</script>
