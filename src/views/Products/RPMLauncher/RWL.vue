<template>
  <div
    id="RPMLauncher"
    class="flex flex-down flex-item-center main Surrounding"
  >
      <img
      src="@/assets/images/RPMLauncher/RWLLog.png"
      alt="特別感謝 嗡嗡#5428 製作圖片"
    />
    <h1>RPMLauncher</h1>
    <h1 class="text-center main-title">
      輕鬆管理您的遊戲<br />
      跨世代的 Minecraft 啟動器登場！
    </h1>
    <div class="links flex flex-center">
      <a
        target="_blank"
        class="btn"
        href=RWL/Version
      >
        立即下載
      </a>
      <a href="https://github.com/RPMTW/RPMLauncher" class="btn">
      <img src="https://github.com/fluidicon.png" alt="" />
      Github</a
    >
      <a
        target="_blank"
        href="https://discord.com/invite/5xApZtgV2u"
        class="btn"
      >
        Discord
      </a>
    </div>
    <hr />
    <section>
      <h1>特色</h1>
         <div className="ImgFeature">
            <img
              class="showEl"
              src="@/assets/images/RPMLauncher/AutoJava.png"
              alt="autoJava"
            />
            <div class="Features">
                <div>
              <h1>自動安裝 Java</h1>
              <p>
               您還在煩惱要安裝哪個版本的 Java ?<br />
               別擔心，我們會自動安裝對應版本的 Java，保證完全相容！
              </p>
            </div>
          </div>
         </div>
         <div className="ImgFeature ImgFeatureLeft">
            <img
              class="showEl"
              src="@/assets/images/RPMLauncher/ModDownload.png"
              alt="modInstall"
            />
            <div class="Features">
                <div>
              <h1>自動安裝模組</h1>
              <p>
               安裝 Forge 與 Fabric 很麻煩？<br />
               在這裡可以直接自動下載模組與安裝 Forge/Fabric
              </p>
            </div>
          </div>
         </div>
    </section>
    <hr />
    <section class="flex flex-item-center flex-down">
      <!-- <h1>程式主畫面</h1>
      <img
        class="showEl"
        src="@/assets/images/RPMLauncher/appMainIcon.png"
        alt="程式主畫面"
      />
      <h1>版本選擇頁面</h1>
      <img
        src="@/assets/images/RPMLauncher/VersionSelection.png"
        alt="版本選擇頁面"
      />
      <h1>版本選擇頁面</h1>
      <img
        src="@/assets/images/RPMLauncher/ViewMod.png"
        alt="版本選擇頁面"
      />     -->
    </section>
    <hr />
    <section>
      <h1>銘謝</h1>
      <p class="notCenter list">
        <strong>主要維護者: </strong>菘菘#8663<br />
        <strong>專案發起者: </strong>sunny.ayyl#2932、菘菘#8663<br />
        <strong>貢獻者: </strong>sunny.ayyl#2932 、 3X0DUS - ChAoS#6969、KyleUltimate<br />
        <strong>啟動器圖片製作: </strong>嗡嗡#5428<br />
        <strong>Github貢獻者: </strong>
        <a href="https://github.com/RPMTW/RPMLauncher/graphs/contributors"
          >點我查看</a
        ><br />
      </p>
    </section>
    <hr />
    <h1>期待此啟動器第一個正式版完成的那天！</h1>
  </div>
</template>

<script>
export default {
  name: "RPMLauncher",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/SurroundingMain.scss";

.Features {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Features h1 {
  text-align: center;
}

.ImgFeature {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 50px 0;
}
.ImgFeatureLeft {
  flex-direction: row-reverse;
}
.ImgFeature > div > h1 {
  width: 400px;
  font-family: Inter;
  width: 100%;
  text-align: start;
  font-family: Inter;
  font-style: normal;
  font-weight: bold !important;
  font-size: 30px;
}
.ImgFeature > div > p {
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
}
.ImgFeature > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 600px;
  padding: 20px;
  margin-left: 50px;
}
.ImgFeature > img {
  width: 600px;
}
</style>