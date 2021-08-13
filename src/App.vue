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
    <div class="flex flex-down">
      <img
        src="https://cdn.discordapp.com/avatars/645588343228334080/f56a0b0223d5f32b902edcb362d08a5d.webp?size=128"
        alt=""
      />
    </div>
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
      /* TODO: 動畫 */
      // let goTopCanvas=document.getElementById("goTopCanvas"); let ctx=goTopCanvas.getContext("2d"); ctx; $(".goTopCanvas");
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
  right: 4%;
  bottom: 5vh;
  top: -100%;
  transition: all 1s ease;
  img {
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  &.showGoTop {
    display: block;
    top: 88%;
  }
}
/* footer bottom */
</style>
