<template>
  <h2>{{ props.name }}</h2>
  <h3>{{ props.age }}</h3>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: String,
  age: String,
});
</script>
