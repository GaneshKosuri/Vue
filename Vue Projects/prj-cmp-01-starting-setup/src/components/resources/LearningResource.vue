<template>
  <li>
    <base-card>
      <div>
        <header>
          <h3>{{ title }}</h3>
          <base-button mode="flat" @click="deleteResource(id)"
            >Delete
          </base-button>
        </header>
      </div>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  inject: ['deleteResource'],
  props: {
    id: String,
    title: String,
    description: String,
    link: String,
  },
};
</script>

<style src="./learning-resource.css" scoped></style>
