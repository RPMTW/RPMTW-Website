<template>
  <div id="Enlarge" v-show="showImg">
    <div class="showImg scaleDraw" v-if="showImg">
      <div class="ImgDescription flex flex-center flex-down flex-item-center">
        <img
          class="not-enlarge"
          :src="showImg"
          :alt="description"
          :hover="description"
        />
        <div @click="showImg = false" class="open-original line">關閉</div>
        <!-- <a :href="imgLink" v-if="imgLink" class="open-original line"
          >開啟原尺寸圖片</a
        > -->
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
      .ImgDescription {
        width: 95%;
        z-index: 9;
        border-radius: 10px;
        position: relative;
        img.not-enlarge {
          z-index: 9;
          height: 80%;
          &:hover {
            &:before {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              content: "";
              background-color: black;
              opacity: 0.8;
            }
            &:after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: flex;
              content: attr(hover);
            }
          }
        }
        .open-original {
          position: absolute;
          right: 5%;
          right: 0px;
          font-size: 25px;
          color: rgb(107, 188, 241);
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