<template>
  <div
    class="gate"
    :class="{
      complete: okLen > nowLen,
      nowadays: okLen == nowLen,
      disable: okLen < nowLen,
    }"
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
};
</script>

<style lang="scss">
.gate {
  &.complete {
    color: red;
  }
  &.nowadays {
    color: aqua;
  }
  &.disable {
    color: brown;
  }
}
</style>