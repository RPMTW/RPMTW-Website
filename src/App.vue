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

export default {
  name: "Main",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
@import "~bootstrap/scss/bootstrap";
body {
  margin-top: 55px;
}
#app {
  display: flex;
  flex-direction: column;
}
/* footer bottom */
</style>
