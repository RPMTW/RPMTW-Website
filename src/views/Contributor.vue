<template>
  <div id="Contributor">
    <div class="loadIng"><a>正在載入資料中，請稍後...</a></div>
    <div id="react-root">
      <div class="user" v-for="(data, index) in users" :key="(data, index)">
        <img class="user-icon" :src="data.user.avatarUrl" />
        <div class="card-body">
          <div class="hover">
            <a href="https://crowdin.com/profile/{{data.user.username}}">
              <h4 class="user-name">
                <span class="txt-rank">{{ index + 1 }}</span>
                {{ data.user.fullName }}
              </h4>
            </a>
          </div>
          <p class="card-text">翻譯字數: {{ data.translated }}</p>
          <p class="card-text">核准翻譯次數: {{ data.approved }}</p>
          <p class="card-text">投票次數: {{ data.voted }}</p>
          <p class="card-text">加入專案時間: {{ data.user.joined }}</p>
          <p class="card-text">翻譯獲得稱讚數: {{ data.winning }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "Contributor",
  methods: {},
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    $(".loadIng").show();
    $.getJSON(
      "https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/opt.json",
      (data) => {
        $(".loadIng").hide();
        this.users = data.data;
      }
    ).fail((error) => {
      console.warn(error);
      $(".loadIng").html("<h1>錯誤，請稍後在試</h1>");
    });
  },
};
</script>
<style lang="scss" scoped>
#Contributor {
  background-color: rgb(62, 66, 71);
  color: #f0f6fc;
  img {
    vertical-align: bottom;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 1.25rem;
  }
  .hover:hover :not(span) {
    color: rgb(100, 194, 132);
  }
  .user-icon {
    border-radius: 100%;
    width: 25%;
  }
  .main {
    display: flex;
    justify-content: center;
  }
  .loadIng {
    display: flex;
    height: 300px;
    align-items: center;
    justify-content: center;
  }
  .user {
    width: 9cm;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    background-color: rgb(49, 52, 66);
  }
  #react-root {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .txt-rank {
    font-size: 1.5em;
    color: rgb(21, 140, 250);
  }
  .user-name {
    color: rgb(108, 245, 154);
  }
}
</style>
