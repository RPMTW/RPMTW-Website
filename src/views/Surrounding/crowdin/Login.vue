<template>
  <div id="CrowdinLogin">
    <div class="data flex flex-down">
      <h2 class="title">登入 Crowdin 帳號</h2>
      <div>
        <div class="input-token-div">
          <input
            :type="(showToken && 'text') || 'password'"
            id="inputToken"
            :class="{
              value: value,
            }"
            v-model="value"
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
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
export default {
  name: "CrowdinLogin",
  data() {
    return {
      showToken: false,
      value: false,
    };
  },
  components: {},
  methods: {
    check(e) {
      if (this.value) {
        window.token = this.value;
      } else {
        $("#inputToken").addClass("value-isNull");
      }
    },
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
    width: 30%;
    height: 25%;
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
        // border-radius: 25px;
        transition: all 0.9s;
        outline: none;
        font-size: 17px;
        background-color: initial;
        border-bottom: 2px solid white !important;
        border: none;
        color: white;
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
        color: white;
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
}
</style>