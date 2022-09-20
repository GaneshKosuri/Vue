<template>
  <div>
    <the-header title="Remember Me"></the-header>
    <the-resources></the-resources>
  </div>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheResources from './components/resources/TheResources.vue';

export default {
  components: {
    TheHeader,
    TheResources,
  },
};
</script>

<style src="./app.css"></style>
