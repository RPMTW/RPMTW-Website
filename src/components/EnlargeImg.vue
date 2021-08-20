<template>
  <div id="Enlarge" v-show="showImg">
    <div class="showImg scaleDraw" v-if="showImg">
      <div class="ImgDescription flex flex-center flex-down flex-item-center">
        <img :src="showImg" class="not-enlarge" alt="" />
        <p class="img-description" v-if="description">{{ description }}</p>
        <a :href="imgLink" v-if="imgLink" class="open-original"
          >開啟原尺寸圖片</a
        >
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
      imgLink: null,
    };
  },
  methods: {},
  mounted() {
    let _ = this;
    $(function () {
      $("html").on("click", "img.showEl", function (e) {
        _.showImg = $(this).attr("src") || null;
        _.description = $(this).attr("alt") || null;
        _.imgLink = $(this).attr("src") || null;
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
      width: 95%;
      .ImgDescription {
        z-index: 9;
        border-radius: 10px;
        position: relative;
        .not-enlarge {
          z-index: 9;
          width: 100%;
          max-height: 90%;
          max-width: 90%;
        }
        .img-description {
          margin: 0;
          z-index: 9;
          margin-top: 5px;
          font-size: 20pt;
          color: white;
          list-style: none;
        }
        .open-original {
          position: absolute;
          left: 0;
          bottom: 0;
        }
        @media all and (max-width: 1200px) {
          .img-description {
            font-size: 2.2vw;
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
    background-color: #000;
    opacity: 0.85;
    @keyframes blurry {
      from {
        opacity: 0;
      }
      to {
        opacity: 0.85;
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