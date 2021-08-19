<template>
  <div id="ATRModPackage " class="flex flex-down flex-item-center main">
    <img
      src="@/assets/images/Surrounding/RPMLauncher/RWLLog.png"
      alt="特別感謝 嗡嗡#5428 製作圖片"
    />
    <img
      src="@/assets/images/Surrounding/RPMLauncher/RWL.png"
      alt="特別感謝 嗡嗡#5428 製作圖片"
      class="showEl"
    />
    <br />
    <hr style="opacity: 0.9" />
    <h1 class="text-center main-title">
      RPMLauncher - 輕鬆管理您的遊戲<br />
      我們在此宣布全新計畫<br />
      RPMLauncher 跨世代的 Minecraft 啟動器登場！
    </h1>
    <div class="links flex flex-center">
      <a
        target="_blank"
        class="btn"
        href="https://github.com/RPMTW/RPMLauncher/actions"
      >
        立即下載
      </a>
      <a
        target="_blank"
        href="https://discord.com/invite/5xApZtgV2u"
        class="btn"
      >
        加入官方社群 (Discord)
      </a>
    </div>
    <section>
      <h1>啟動器資訊</h1>
      <p>
        <strong>支援作業系統:</strong>
        Windows、Linux (Mac理論上支援但尚未測試)<br />
        <strong>啟動器支援語言:</strong>
        繁體中文 (台灣/香港)、简体中文、English、日本語
      </p>
    </section>
    <hr />
    <section>
      <h1>啟動器特色</h1>
      <h2 class="text-center">由於此啟動器還在開發中，未來還會新增許多功能</h2>
      <p class="notCenter list">
        - 自動安裝並設定對應版本的Java<br />
        - 自動安裝模組載入器<br />
        - 在啟動器內可以直接從CurseForge、Modrinth等平台下載模組與模組包<br />
        - 支援即時監控遊戲日誌<br />
        - 支援多國語言<br />
        - 自動檢測資源檔案是否完整<br />
        - 編輯安裝檔頁面<br />
        - 快速導入地圖檔案<br />
        - 支援模組包直接下載與安裝 (匯出功能製作中)<br />
        - 還有許多實用與方便的功能<br />
      </p>
    </section>
    <hr />
    <section class="flex flex-item-center flex-down">
      <h1>程式主畫面</h1>
      <img
        class="showEl"
        src="@/assets/images/Surrounding/RPMLauncher/appMainIcon.png"
        alt="程式主畫面"
      />
      <h1>版本選擇頁面</h1>
      <img
        src="@/assets/images/Surrounding/RPMLauncher/VersionSelection.png"
        alt="版本選擇頁面"
      />
      <h1>版本選擇頁面</h1>
      <img
        src="@/assets/images/Surrounding/RPMLauncher/ViewMod.png"
        alt="版本選擇頁面"
      />
      <h1>模組下載頁面</h1>
      <img
        src="@/assets/images/Surrounding/RPMLauncher/ModDownload.png"
        alt="模組下載頁面"
      />
    </section>
    <hr />
    <section>
      <h1>開發者名單</h1>
      <p class="notCenter list">
        - <strong>主要開發者:</strong> 菘菘#8663、sunny.ayyl#2932<br />
        - <strong>啟動器圖片製作:</strong> 嗡嗡#5428<br />
        - <strong>Github貢獻者:</strong>
        <a href="https://github.com/RPMTW/RPMLauncher/graphs/contributors"
          >點我查看</a
        ><br />
      </p>
    </section>
    <hr />
    <h1>期待此啟動器第一個正式版完成的那天！</h1>
    <a href="https://github.com/RPMTW/RPMLauncher" class="btn">
      <img src="https://github.com/fluidicon.png" alt="" />
      Github儲存庫</a
    >
  </div>
</template>

<script>
export default {
  name: "ATRModPackage",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/SurroundingMain.scss";
</style>