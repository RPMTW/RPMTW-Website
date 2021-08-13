<template>
  <Header />
  <router-view class="wrapper" />
  <div class="FooterAir"></div>
  <Footer />
  <div
    class="goTop"
    @click="goTop"
    :class="{
      showGoTop: showGoTop,
    }"
  >
    <img
      src="https://cdn.discordapp.com/avatars/645588343228334080/f56a0b0223d5f32b902edcb362d08a5d.webp?size=128"
      alt=""
    />
  </div>
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
  methods: {
    goTop() {
      $("html").animate({ scrollTop: 0 }, 400);
    },
  },
  data() {
    return {
      showGoTop: false,
    };
  },
  mounted() {
    let _this = this;
    $(function () {
      $(window).on(
        "scroll",
        () => (_this.showGoTop = $(window).scrollTop() > 600)
      );
    });
  },
};
</script>
<style lang="scss">
html {
  margin-top: 55px;
}
#app {
  display: flex;
  flex-direction: column;
}

.goTop {
  position: fixed;
  right: 0;
  bottom: 5vh;
  transform: translateX(100%);
  img {
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  transition: transform 0.2s ease;
  &.showGoTop {
    display: block;
    transform: translateX(-100%);
  }
}
/* footer bottom */
</style>
