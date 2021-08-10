<template>
  <Header />
  <router-view class="wrapper" />
  <div class="FooterAir"></div>
  <Footer />
</template>
<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* components */
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import fonts from "@/assets/fonts/fonts.css";

/* scss */
import WikiScss from "@/scss/Wiki.scss";

export default {
  name: "Main",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
}

/* footer bottom */
</style>
