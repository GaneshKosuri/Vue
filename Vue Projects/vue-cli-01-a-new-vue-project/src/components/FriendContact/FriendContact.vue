<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleIsFriendFavourite">Toggle Favourite</button>
    <button @click="toggleDetailsVisible">
      {{ toggleDetailsVisible ? "Show" : "Hide" }} Details
    </button>
    <ul v-if="isDetailsVisible">
      <li><strong>Phone: </strong>{{ number }}</li>
      <li><strong>Email: </strong>{{ eMail }}</li>
    </ul>
    <div>
      <button @click="onClickDelete">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  //   props: ["name", "number", "eMail", "isFavourite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    eMail: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggle-favourite", "delete-contact"],
  // emits: {
  //   "toggle-favourite": function (id) {},
  // },
  data() {
    return {
      isDetailsVisible: false,
      friend: {
        id: "1",
        name: "Siva",
        number: "78989478590",
        email: "siva@gmail.com",
      },
    };
  },
  methods: {
    toggleDetailsVisible() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
    toggleIsFriendFavourite() {
      this.$emit("toggle-favourite", this.id);
    },
    onClickDelete() {
      this.$emit("delete-contact", this.id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin: 0px 5px;
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
