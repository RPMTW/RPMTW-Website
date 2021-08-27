<template>
  <div class="Footer" v-if="notFooter">
    <footer class="flex flex-down">
      <p>
        Copyright &copy; RPMTW {{ newYear }} Powered by The
        <a target="_blank" href="https://github.com/RPMTW">RPMTW Team</a> and
        <a target="_blank" href="https://github.com/a3510377">猴子#3807</a>
      </p>
    </footer>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "Footer",
  data() {
    return {
      notFooter: true,
      newYear: new Date().getFullYear(),
    };
  },
  watch: {
    $route() {
      this.notFooter = !(
        this.$route.meta.notFooter || this.$route.query.notFooter
      );
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
  font-family: sans-serif;
  justify-content: center;
  text-align: center;
  @media all and (max-width: 600px) {
    font-size: 2.7vw !important;
  }
  a[href] {
    color: rgb(129, 231, 125);
  }
}
</style>
