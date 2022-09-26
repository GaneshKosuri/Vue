<template>
  <h2>{{ finalCounter }}</h2>
  <h3>Normal counter</h3>
  <h2>{{ nomalizedCounter }}</h2>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    // normalCounter() {
    //   return this.$store.getters.nomalizedCounter;
    // },
    ...mapGetters('numbers', ['finalCounter', 'nomalizedCounter']),
  },
};
</script>
