<template>
  <div
    class="gate"
    :class="{
      complete: parseInt(okLen) < nowLen,
      nowadays: parseInt(okLen) === nowLen,
      disable: parseInt(okLen) > nowLen,
    }"
    :okLen="okLen"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Gate",
  data() {
    return {};
  },
  methods: {},
  props: {
    okLen: String,
    nowLen: Number,
  },
  mounted() {},
};
</script>

<style lang="scss">
.gate {
  &.complete {
    background-color: aqua;
    color: black;
  }
  &.nowadays {
    color: aqua;
  }
  &.disable {
    color: brown;
  }
}
</style>