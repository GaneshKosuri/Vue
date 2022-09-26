<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="incrementCounter">Add 1</button>
    <button @click="increment({ value: 10 })">Add 10</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import { mapActions, mapMutations } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    // addOne() {
    //   this.$store.commit('incrementCounter');
    // },
    // addByValue(value) {
    //   // this.$store.commit('increaseByValue', { value });
    //   // this.$store.commit({
    //   //   type: 'increaseByValue',
    //   //   value,
    //   // });
    //   this.$store.dispatch({
    //     type: 'increment',
    //     value,
    //   });
    // },

    ...mapActions(['increment']),
    ...mapMutations(['incrementCounter']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
