<template>
  <dialog open>
    <header>
      <slot name="header">
        <h2>{{ title }}</h2>
      </slot>
    </header>
    <section>
      <slot></slot>
    </section>
    <menu>
      <slot name="actions">
        <base-button @click="$emit('close')">Close</base-button>
      </slot>
    </menu>
  </dialog>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style src="./dialog.css" scoped></style>
