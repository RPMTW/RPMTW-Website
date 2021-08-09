<template>
  <div class="Footer" v-if="notFooter">
    <footer>
      <p>Copyright © RPMTW 2021-2021 Powered by The RPMTW Team</p>
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
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Comic Neue", cursive;
  justify-content: center;
}
</style>