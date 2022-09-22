<template>
  <h2>{{ props.name }}</h2>
  <h3>{{ user.age }}</h3>
  <button @click="emits('update', 10)">Update age by 10</button>
</template>

<script setup>
import { defineProps, defineEmits, inject } from 'vue';

const props = defineProps({
  name: String,
});

const user = inject('user');

const emits = defineEmits(['update']);
console.log('emits', emits);
</script>
