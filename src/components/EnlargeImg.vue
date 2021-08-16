<template>
  <div id="EnlargeImg" v-if="showImg">
    <div class="x"></div>
    <div class="<"></div>
    <div class=">"></div>
    <div class="showImg">
      <img :src="showImg" class="not-enlarge" alt="" />
    </div>
    <div class="EnlargeImg-footer"></div>
    <div class="EnlargeImg-blurry" @click="showImg = !showImg"></div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default {
  name: "EnlargeImg",
  data() {
    return {
      showImg: null,
    };
  },
  methods: {},
  mounted() {
    let _ = this;
    $(function () {
      $("html").on("click", "img.showEl", function (e) {
        _.showImg = $(this).attr("src") || null;
        $("html").addClass("enlarge");
        $("#EnlargeImg.not-enlarge").css({
          width: $(this).css("width"),
          height: $(this).css("height"),
        });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
#EnlargeImg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 99;
  .showImg {
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    .not-enlarge {
      z-index: 9;
      width: 80%;
      max-height: 80%;
    }
  }
  .EnlargeImg-blurry {
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: block;
    opacity: 0.3;
    background: black;
    top: 0;
    left: 0;
  }
}
</style>
<style lang="scss">
html.enlarge {
  background-color: red;
}
</style>