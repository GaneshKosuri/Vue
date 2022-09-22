<template>
  <section class="container">
    <!-- <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2> -->
    <!-- <user-data :name="user.name" :age="user.age"></user-data> -->
    <UserData :name="user.name" :age="user.age" />
    <button @click="updateUserAge">Change Age</button>
    <div>
      <input type="text" placeholder="Enter First name" v-model="firstName" />
      <input type="text" placeholder="Enter Last name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
    <h2>{{ fullName }}</h2>
  </section>
  <section class="container">
    <h2>{{ cricketer.name }}</h2>
    <h2>{{ cricketer.jersey }}</h2>
  </section>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';
import UserData from './components/UserData.vue';

// const username = ref('Ganesh Kosuri');
// const age = ref(20);

// setTimeout(() => {
//   username.value = 'Aravind';
//   age.value = 25;
// }, 2000);

const user = ref({
  name: 'Ganesh Kosuri',
  age: 25,
});

const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null);

// const setFirstName = (event) => {
//   firstName.value = event.target.value;
// };

// const setLastName = (event) => {
//   lastName.value = event.target.value;
// };

const setLastName = () => {
  lastName.value = lastNameInput.value.value;
};

const fullName = computed(() => firstName.value + ' ' + lastName.value);

watch(fullName, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

watch([firstName, lastName], (newValues, oldValues) => {
  console.log('new', newValues);
  console.log('old', oldValues);
});

// console.log('user', user);

const cricketer = reactive({
  name: 'Dhoni',
  jersey: 7,
});

console.log('cricketer', cricketer);

setTimeout(() => {
  user.value.name = 'Aravind';
  user.value.age = 30;
  cricketer.name = 'Virat Kohli';
  cricketer.jersey = 18;
}, 2000);

const updateUserAge = () => {
  user.value.age++;
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
