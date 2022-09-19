<template>
  <form class="form-container" @submit="onAddNewFriend">
    <div class="inputs-container">
      <label>Name</label>
      <input type="text" v-model="name" />
      <label>Number</label>
      <input type="tel" v-model="number" />
      <label>Email</label>
      <input type="email" v-model="email" />
      <input type="checkbox" v-model="isFavourite" />
      <label>is favourite</label>
    </div>
    <div>
      <button type="submit">Add New Friend</button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  emit: ["add-new-friend"],
  data() {
    return {
      name: "",
      number: "",
      email: "",
      isFavourite: false,
    };
  },
  methods: {
    resetFormData() {
      this.name = "";
      this.number = "";
      this.email = "";
      this.isFavourite = false;
    },
    onAddNewFriend(event) {
      event.preventDefault();
      const newFriend = {
        id: uuidv4(),
        name: this.name,
        number: this.number,
        email: this.email,
        isFavourite: this.isFavourite,
      };
      this.$emit("add-new-friend", newFriend);
      this.resetFormData();
    },
  },
};
</script>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.inputs-container {
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 8px;
}
</style>
