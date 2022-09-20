<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    mode: String,
  },
};
</script>

<style src="./button.css" scoped></style>
