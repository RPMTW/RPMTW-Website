<template>
  <div id="Tutorials">
    <h1 class="orange center">基礎教學</h1>
    <div>
      <h3 class="center">首先請先註冊 Crowdin帳號。</h3>
      <div class="flex flex-center">
        <a
          target="_blank"
          href="https://www.rpmtw.ga/Wiki/AssistTranslation#register-crowdin-account"
          class="btn"
        >
          查看註冊帳號教學
        </a>
      </div>
      <h3 class="center">註冊完帳號後再點擊下方按鈕加入 RPMTW 翻譯專案。</h3>
      <div class="flex flex-center">
        <a
          target="_blank"
          href="https://crowdin.com/project/resourcepack-mod-zhtw?already_accepted=14797842"
          class="btn"
        >
          加入翻譯專案
        </a>
      </div>
      <h3 class="center">
        註冊完帳號並且確認加入 RPMTW 翻譯專案後，接下來就可以開始翻譯囉##
      </h3>
      <div class="flex flex-center">
        <a href="https://rpmtw.github.io/index.html" class="btn"> 前往翻譯網頁 </a>
      </div>
      <h2 class="center">
        最後感謝您閱讀那麼長篇的文字，非常感謝，您現在可以開始進行翻譯了!<br />
        <h2>
          如果遇到任何問題或者想討論翻譯又或者想要聊天歡迎到我們的Discord群組
        </h2>
      </h2>
      <a
        target="_blank"
        href="https://discord.com/invite/5xApZtgV2u"
        class="btn"
        >前往 Discord 群組</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Tutorials",
  methods: {},
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.center {
  text-align: center;
}
#Tutorials {
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.flow-chart {
  margin-top: 50px;
  width: 80%;
}
.img-infos {
  margin-top: 20px;
  margin-left: 8%;
  strong {
    font-size: 14pt;
  }
}
.go-discord {
  width: 70%;
  padding: 5px 0;
}

/* text-style */
.orange {
  color: var(--strong-color);
}
.img-infos li {
  list-style-type: decimal;
}
</style>