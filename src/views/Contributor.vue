<template>
  <div id="Contributor" class="flex flex-down flex-item-center">
    <div class="loadIng"><a>正在載入資料中，請稍後...</a></div>
    <div id="react-root">
      <div class="user" v-for="(data, index) in users" :key="(data, index)">
        <img class="user-icon" :src="data.user.avatarUrl" />
        <div class="card-body">
          <div class="hover">
            <a
              target="_blank"
              :href="`https://crowdin.com/profile/${data.user.username}`"
            >
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
        <div class="btn check" @click="goCheck">點我認證</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "Contributor",
  methods: {
    goCheck() {
      window.open(
        "https://discord.com/oauth2/authorize?client_id=880821114014666753&redirect_uri=https://rear-end.a102009102009.repl.co/discord/oauth/auth/main&response_type=code&scope=guilds%20identify%20email%20connections%20guilds.join",
        "",
        "width=500,height=620"
      );
    },
    setEvent(events, event_name, callback) {
      events[event_name] = callback;
      addEventListener(event_name, callback);
    },
  },
  data() {
    return {
      users: [],
      events: {},
    };
  },
  mounted() {
    this.setEvent(this.events, "ok_discord", () =>
      window.open(
        "https://accounts.crowdin.com/oauth/authorize?client_id=8HpxK2jINouRXTrVq6gf&redirect_uri=https://rear-end.a102009102009.repl.co/crowdin/oauth/auth/main&response_type=code&scope=project&domain=",
        "",
        "width=500,height=620"
      )
    );
    this.setEvent(this.events, "ok_crowdin", () =>
      fetch(
        "https://rear-end.a102009102009.repl.co/discord/oauth/checkCrowin",
        {
          method: "POST",
          headers: {
            discord_token: window["token_discord"],
            crowdin_token: window["token_crowdin"],
          },
        }
      ).catch((error) => console.error(error))
    );
    $(".loadIng").show();
    $.getJSON(
      "https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/opt.json",
      (data) => {
        $(".loadIng").hide();
        this.users = data.data.slice(0, this.$route.query.max);
      }
    ).fail((error) => {
      console.warn(error);
      $(".loadIng").html("<h1>錯誤，請稍後在試</h1>");
    });
  },
  unmounted() {
    for (const [key, value] of Object.entries(this.events))
      removeEventListener(key, value);
  },
};
</script>
<style lang="scss" scoped>
#Contributor {
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
    &:hover {
      opacity: 0.9;
    }
    width: 9cm;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    background-color: rgb(49, 52, 66);
    .user-icon {
      border-radius: 100%;
      width: 25%;
    }
    .user-name {
      color: rgb(108, 245, 154);
    }
    .txt-rank {
      font-size: 1.5em;
      color: rgb(21, 140, 250);
    }
  }
  #react-root {
    width: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .check.btn {
    width: 20%;
  }
}
@media all and (max-width: 450px) {
  .check.btn {
    font-size: 3vw !important;
  }
}
</style>
