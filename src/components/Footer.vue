<template>
  <div class="Footer" v-if="notFooter">
    <footer class="flex flex-down">
      <div>
        Copyright © RPMTW 2021-2021 Powered by The
        <a href="https://github.com/RPMTW">RPMTW Team</a> and
        <a href="https://github.com/a3510377">猴子#3807</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      notFooter: true,
    };
  },
  watch: {
    $route() {
      this.notFooter = !this.$route.meta.notFooter;
    },
  },
};
</script>

<style lang="scss" scoped>
/* footer */
.Footer {
  display: block;
  margin-top: 5em;
  background-color: black;
  width: 100%;
  height: auto;
  min-height: 50px;
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Comic Neue", cursive;
  justify-content: center;
  @media all and (max-width: 600px) {
    font-size: 2.7vw !important;
  }
  a[href] {
    color: rgb(129, 231, 125);
  }
}
</style>
