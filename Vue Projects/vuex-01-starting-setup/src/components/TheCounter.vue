<template>
  <h2>{{ counter }}</h2>
  <h3>Normal counter</h3>
  <h2>{{ normalCounter }}</h2>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
    normalCounter() {
      return this.$store.getters.nomalizedCounter;
    },
  },
};
</script>
