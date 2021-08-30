<template>
  <Header />
  <router-view class="wrapper" />
  <Footer class="footer" />
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
  <EnlargeImg />
</template>
<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* components */
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import EnlargeImg from "@/components/EnlargeImg.vue";
import fonts from "@/assets/fonts/fonts.css";
import mainScss from "@/assets/scss/main.scss";

export default {
  name: "Main",
  components: {
    Header,
    Footer,
    EnlargeImg,
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
        () => (_this.showGoTop = $(window).scrollTop() >= 600)
      );
    });
  },
};
</script>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--html-margin-top));
  .wrapper {
    flex-grow: 1;
  }
}

.goTop {
  position: fixed;
  right: 4%;
  bottom: 6vh;
  transform: translateY(-100vh);
  transition: transform 1s ease;
  img {
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  &.showGoTop {
    display: block;
    transform: translateY(0);
  }
}
</style>
