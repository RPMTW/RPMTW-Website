<template>
  <div id="Enlarge" v-show="showImg">
    <div class="showImg scaleDraw" v-if="showImg">
      <div class="ImgDescription flex flex-center flex-down flex-item-center">
        <div class="icon x" @click="showImg = false"></div>
        <img :src="showImg" class="not-enlarge" alt="" />
        <p class="img-description">{{ description }}</p>
      </div>
    </div>
    <div class="EnlargeImg-blurry" @click="showImg = false"></div>
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
      description: null,
    };
  },
  methods: {},
  mounted() {
    let _ = this;
    $(function () {
      $("html").on("click", "img.showEl", function (e) {
        _.showImg = $(this).attr("src") || null;
        _.description = $(this).attr("alt");
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
#Enlarge {
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
    &.scaleDraw {
      animation-name: scaleDraw;
      animation-timing-function: ease-in-out;
      animation-duration: 0.5s;
      .ImgDescription {
        z-index: 9;
        background: #aba499;
        border-radius: 10px;
        width: 80%;
        padding: 4% 2px 2% 2px;
        position: relative;
        .icon.x {
          font-size: 25pt;
          cursor: pointer;
          position: absolute;
          top: 8%;
          right: 4%;
          padding: 5px;
        }
        .not-enlarge {
          z-index: 9;
          width: 80%;
          max-height: 80%;
          max-width: 80%;
        }
        .img-description {
          margin: 0;
          margin-top: 1% !important;
          z-index: 9;
          font-size: 20pt;
          color: black;
          list-style: none;
        }
        @media all and (max-width: 1200px) {
          padding-top: 5% !important;
          .img-description {
            font-size: 2.2vw;
          }
          .icon.x {
            font-size: 2.5vw;
          }
        }
      }
      @keyframes scaleDraw {
        from {
          z-index: 9;
          transform: scale(0);
        }
        to {
          z-index: 9;
          transform: scale(1);
        }
      }
    }
  }
  .EnlargeImg-blurry {
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    animation-name: blurry;
    animation-timing-function: ease-in-out;
    animation-duration: 0.5s;
    opacity: 0.5;
    background-color: #000;
    @keyframes blurry {
      from {
        opacity: 0;
      }
      to {
        opacity: 0.5;
      }
    }
  }
}
</style>
<style lang="scss">
.showEl {
  cursor: pointer;
}
html.enlarge {
  background-color: red;
}
</style>