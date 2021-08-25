<template>
  <div class="about flex flex-down flex-item-center">
    <h1>關於 RPMTW 團隊</h1>
    <p><strong>點擊圖片即可導向到網站</strong></p>
    <div class="icons">
      <div class="icon">
        <a target="_blank" href="https://discord.com/invite/5xApZtgV2u">
          <img src="@/assets/images/discord.png" alt="" />
        </a>
        <strong>Discord<br />社群</strong>
      </div>
      <div class="icon">
        <a target="_blank" href="https://github.com/RPMTW">
          <img src="@/assets/images/github-icon.png" alt="" />
        </a>
        <strong>GitHub<br />儲存庫</strong>
      </div>
    </div>
    <iframe
      class="discord"
      src="https://discord.com/widget?id=815819580840607807&theme=dark"
      frameborder="0"
    ></iframe>
    <div class="Copyright flex flex-center">
      <ul>
        <h4>網站版權使用註明:</h4>
        <li>
          Icons made by
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
            >Pixel perfect</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon"
            >www.flaticon.com</a
          >
        </li>
        <li></li>
      </ul>
      <ul>
        <h4>模組版權使用註明:</h4>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  components: {},
};
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  > h1 {
    font-size: 60pt;
  }
  > p {
    color: var(--strong-color);
    font-size: 14pt;
  }
  .icons {
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .icon {
      margin: 20px;
      width: 10%;
      img {
        width: 100%;
      }
    }
  }
  .discord {
    width: 80%;
    height: 450px;
  }
  .Copyright {
    width: 80%;
    > ul {
      min-width: 40%;
      > li {
        text-align: left;
      }
    }
  }
  @media all and (max-width: 800px) {
    h1 {
      font-size: 10vw !important;
    }
    strong {
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
}
</style>