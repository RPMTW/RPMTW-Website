<template>
  <div id="Assistance">
    <div class="title-center">
      <h1><strong>《RPMTW 翻譯準則》</strong></h1>
      <h2 style="font-weight: 900">
        進行翻譯前請記得查看以下的《翻譯準則》，感謝配合。
      </h2>
      <p>
        翻譯準則的目的是為了讓 Minecraft
        繁體中文模組翻譯統一，給玩家更好的體驗<br />
        本文將對於 RPMTW 翻譯包訂定翻譯準則，希望譯者們能夠<strong
          >盡量遵守此規範</strong
        ><br />
        查看完畢後可以點最下方的按鈕，即可前往下一頁查看翻譯教學<br />
        感激不盡!!!
      </p>
    </div>
    <div class="content">
      <ul>
        <h1>一般規範</h1>
        <li>請盡量以原文意思為準，如非必要請避免超譯。</li>
        <li>
          翻譯時如果不知道原文想要表達的意思，可以嘗試進入遊戲測試看看在遊戲中表達什麼意思，或者查詢網路相關資訊，再進行翻譯。
        </li>
        <li>
          請盡量符合
          <strong>《Minecraft繁體中文(台灣)標準化譯名》</strong
          >，如果依舊無法轉換為慣用詞，請改變敘述方式或者與其他譯者討論。
        </li>
        <li>
          如果沒有翻譯過的字串，請不要將原文複製下來再貼上，除非有特別意義(例如:&ensp;<strong
            >Just Enough Items</strong
          >。
        </li>
      </ul>
      <ul>
        <h1>專有名詞</h1>
        <li>
          如果想表達的是人名、專有名詞、學術用語等，請使用該名稱的通用譯名。
        </li>
        <li>
          若網路上仍找不到通用譯名，請略過翻譯，或者也可使用音譯(建議可以跟大家討論看看)。
        </li>
      </ul>
      <ul>
        <h1>需保留字/串</h1>
        <li>
          在原文中如果有看到<strong> %s、%d、%msg% </strong>，這類型用
          <strong>%</strong>
          包覆起來的文字通常都是變數(會自動替換成模組作者設定的數字或文字等)，請不要翻譯該字/串，例:<br />
          <span type="tab">原文:</span
          ><strong><span class="notranslate"> my name is %name%</span></strong
          ><br />
          <span type="tab">譯文:</span
          ><strong><span class="notranslate"> 我的名字是 %name%</span></strong
          ><br />
          請翻譯成類似這樣，然後 <strong>%</strong> 也不要改成全形符號。
        </li>
        <li>
          某些模組會使用 <strong>&&amp</strong> 或者
          <strong>§</strong> 代表顏色或格式等，請不要翻譯(詳情請查看:&ensp;
          <a
            href="https://minecraft.fandom.com/wiki/Formatting_codes"
            style="border-bottom: rgba(85, 109, 223, 1) 1.5px solid"
            >Minecraft顏色與格式化代碼</a
          >。
        </li>
        <li>
          有的模組手冊中會使用 <strong>&lt;br&gt;</strong> 或者
          <strong>&lt;color:#FFF2F2&gt;</strong>
          這類型也請不要翻譯，通常是用來表示換行或顏色等等。
        </li>
      </ul>
      <ul>
        <h1>備註</h1>
        <li>
          如引用他人的翻譯需經過他人同意，並且要附上原始翻譯作者(放在Crowdin翻譯平台的討論區)，再進行提交。
        </li>
      </ul>
    </div>
    <h3 class="title-center">
      如發現此翻譯準則有任何錯誤的地方或者不知道該如何翻譯<br />
      歡迎到我們的 <a href=""></a>Discord 翻譯討論頻道討論。
    </h3>
    <div class="title-center">
      <router-link
        class="button-div finish aria"
        to="/Translation-Assistance/Translation-Tutorials"
      >
        我已經查看完畢，可以進行翻譯了!!
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Assistance",
  methods: {},
};
</script>

<style lang="scss" scoped>
#Assistance {
  font-size: 14pt;
  > .title-center {
    text-align: center;
  }
}
ul {
  padding-left: 0;
  h1 {
    position: relative;
    left: -20px;
  }
  li {
    list-style-type: decimal;
    text-indent: 10px;
  }
}
.center-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  padding-left: 10%;
}
/* text */
strong {
  color: var(--strong-color);
  font-weight: 900;
}
span[type="tab"] {
  margin-left: 35px;
}
div.title-center {
  width: 100%;
  .finish.button-div {
    padding: 0.5% 20%;
  }
}
</style>