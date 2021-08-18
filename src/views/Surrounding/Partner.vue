<template>
  <div id="Partner" class="flex">
    <h1>合作夥伴</h1>
    <div class="flex partner">
      <div class="unit flex" v-for="i in data" :key="i">
        <div class="flex name">
          <img :src="i.img" alt="" />
          <h2 class="partner-Name">{{ i.name }}</h2>
        </div>
        <div class="description flex">
          <div class="ctx flex flex-down flex-item-center">
            <h3>{{ i.data.title }}</h3>
            <p v-html="i.data.text"></p>
            <div class="flex">
              <a
                target="_blank"
                class="btn"
                v-for="button in i.data.buttons"
                :href="button.url"
                :key="button"
                >{{ button.title }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="showPartner" v-if="htmlUnit">
      <div class="data">
        <div v-html="htmlUnit" class="unit-show"></div>
      </div>
      <div class="showPartner-blurry" @click="htmlUnit = false"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import data from "@/data/Partner.json";

export default {
  name: "Partner",
  data() {
    return {
      htmlUnit: false,
      data: data,
    };
  },
  methods: {},
  mounted() {
    let _ = this;
    $(function () {
      $("#Partner").on("click", ".unit", function (e) {
        _.htmlUnit = $(this).html();
      });
    });
  },
};
</script>

<style lang="scss" scoped>
#Partner {
  flex-direction: column;
  align-items: center;
  align-content: center;
  img {
    max-width: 25%;
    max-height: 25%;
    border-radius: 10px;
  }
  .partner {
    width: 80%;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    .unit {
      background-color: #aba499;
      color: black;
      padding: 25px;
      margin: 5px;
      border-radius: 20px;
      flex-direction: column;
      width: 9cm;
      .name .partner-Name {
        margin-left: 10px;
      }
      .description {
        display: none;
      }
      display: inline-block;
      position: relative;
      &:hover {
        &:before {
          content: "";
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #000;
          opacity: 0.5;
          border-radius: 20px;
        }
        &:after {
          display: flex;
          justify-content: center;
          align-items: center;
          content: "閱讀更多";
          color: white;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          cursor: pointer;
        }
      }
    }
  }
  .showPartner {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    .data {
      color: black;
      font-weight: 900;
      width: 100vw;
      height: 100vh;
      position: relative;

      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      flex-direction: column;
      .unit-show {
        z-index: 999;
        border-radius: 20px;
        background-color: #aba499;
        width: 80%;
        padding: 10px 0;
        .name {
          flex-direction: column;
          align-items: center;
          .partner-Name {
            margin-left: 10px;
          }
        }
        .description {
          width: 100%;
          justify-content: center;
          .ctx {
            width: 80%;
            :not(.btn, .center) {
              text-align: left;
            }
            p {
              font-size: 13pt;
              margin-left: 10px;
            }
            h3 {
              font-size: 15pt;
              margin: 0;
            }
          }
        }
      }
    }
    .showPartner-blurry {
      z-index: 99;
      width: 100vw;
      height: 100vh;
      position: fixed;
      background: black;
      top: 0;
      left: 0;
      opacity: 0.4;
    }
    .btn {
      margin: 0 0 10px 10px;
    }
  }
  @media all and (max-width: 500px) {
    .unit {
      padding: 10px !important;
      .name {
        flex-direction: column;
        align-items: center;
        .partner-Name {
          margin-left: 0;
        }
      }
    }
    .showPartner,
    .unit {
      h2 {
        font-size: 4.4vw;
      }
      h3 {
        font-size: 3.2vw;
      }
      p {
        font-size: 3.4vw !important;
      }
      .btn {
        font-size: 3vw;
      }
    }
  }
}
</style>