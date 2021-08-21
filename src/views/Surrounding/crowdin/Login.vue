<template>
  <div id="CrowdinLogin">
    <div class="data flex flex-down">
      <h2 class="title">登入 Crowdin 帳號</h2>
      <div>
        <div class="input-token-div">
          <input
            id="inputToken"
            v-model="value"
            :type="(showToken && 'text') || 'password'"
            :class="{
              value: value,
            }"
            :value="value"
            @keyup.enter="check"
          />
          <label>請輸入登入權杖</label>
        </div>
        <p
          @click="showToken = !showToken"
          class="showToken-btn user-select text-center"
        >
          {{ (showToken && "隱藏") || "顯示" }}登入權杖
        </p>
      </div>
      <img
        class="icon-login"
        src="@/assets/images/icons/login.svg"
        alt="登入"
        @click="check"
      />
    </div>
    <div
      class="output"
      v-show="output"
      :class="{
        isOk: isOK,
      }"
    >
      <div class="close icon x" @click="output = null"></div>
      <div
        v-if="Object.keys(output || {}).length > 0"
        class="userInfo flex flex-item-center"
      >
        <img :src="output.avatarUrl" alt="" />
        <p v-text="`${output.fullName}(${output.username}) 登入成功!!`"></p>
      </div>
      <h2 v-text="output" v-else></h2>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
import API from "./API.js";
export default {
  name: "CrowdinLogin",
  data() {
    return {
      showToken: false,
      value: null,
      output: null,
      isOK: true,
    };
  },
  components: {},
  methods: {
    check(e) {
      if (this.value) {
        API.getData("/user", this.value)
          .done((data) => {
            this.output = data.data;
            this.isOK = true;
            setTimeout(() => {
              document.cookie = `crowdinToken=${this.value}`;
              this.$emit("go", this.value);
            }, 3e3);
          })
          .catch((value) => {
            if (value.status === 401) {
              this.isOK = false;
              this.output = "登入權杖錯誤!!";
            }
          });
      } else {
        $("#inputToken").addClass("value-isNull");
      }
    },
  },
  mounted() {
    this.value = getCookie("crowdinToken");
  },
};
</script>

<style lang="scss" scoped>
#CrowdinLogin {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  .data {
    background-color: var(--styleMode-background-color);
    width: 25em;
    height: 20em;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    .title {
      margin-top: 0;
    }
    .showToken-btn {
      cursor: pointer;
      color: rgb(194, 194, 194);
      margin: 0;
    }
    .input-token-div {
      height: 50px;
      width: 100%;
      position: relative;
      #inputToken {
        width: 100%;
        height: 50%;
        padding: 5px 10px;
        transition: all 0.9s;
        outline: none;
        font-size: 17px;
        background-color: initial;
        border: none;
        border-bottom: 2px solid var(--styleMode-color) !important;
        color: var(--styleMode-color);
        &:focus,
        &.value {
          border-bottom: 2px solid #5b76ff !important;
          ~ label {
            transform: translateY(-25px);
            left: 5px;
            font-size: 10pt;
          }
        }
        &.value-isNull {
          border-bottom: 2px solid red !important;
        }
      }
      label {
        position: absolute;
        font-size: 12pt;
        top: 15%;
        left: 10px;
        color: var(--styleMode-colors);
        pointer-events: none;
        transition: all 0.3s ease;
        transform: scaleY(-20px);
      }
    }
    .icon-login {
      cursor: pointer;
      max-width: 25px;
      background-color: white;
      padding: 5px;
      border-radius: 10px;
      &:active {
        background-color: rgb(209, 209, 209);
      }
    }
  }
  .output {
    padding: 0.5% 4%;
    border-radius: 5px;
    background-color: #ff5252;
    position: fixed;
    top: 2%;
    &.isOk {
      background-color: #49b66e !important;
    }
    .close {
      cursor: pointer;
      position: absolute;
      top: 8px;
      right: 8px;
    }
    .userInfo {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 5px;
      }
    }
  }
}
</style>