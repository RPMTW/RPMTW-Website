<template>
  <div class="about">
    <h1>關於 RPMTW 團隊</h1>
    <p><strong>點擊圖片即可導向到網站</strong></p>
    <div class="icons">
      <div class="icon">
        <a target="_blank" href="https://discord.com/invite/5xApZtgV2u">
          <img
            src="https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico"
            alt=""
          />
        </a>
        <strong>Discord<br />社群</strong>
      </div>
      <div class="icon">
        <a
          target="_blank"
          href="https://crowdin.com/project/resourcepack-mod-zhtw"
        >
          <img
            src="https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png"
            alt=""
          />
        </a>
        <strong>Crowdin<br />專案</strong>
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
  </div>
</template>
<script>
export default {
  name: "About",
  components: {},
};
</script>

<style lang="scss">
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