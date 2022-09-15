<template>
  <section>
    <header>Hello Ganesh Kosuri</header>
    <ul>
      <friend-contact />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "Siva",
          number: "78989478590",
          email: "siva@gmail.com",
        },
        {
          id: "2",
          name: "Aravind",
          number: "9133451679",
          email: "aravind@gmail.com",
        },
        {
          id: "3",
          name: "Venkatesh",
          number: "7845159632",
          email: "venkatesh@gmail.com",
        },
      ],
    };
  },
};
</script>
