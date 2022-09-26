<template>
  <button @click="login" v-if="!userIsAuthenticated">Login</button>
  <button @click="logOut" v-if="userIsAuthenticated">Log out</button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    login() {
      this.$store.dispatch('logIn');
    },
    logOut() {
      this.$store.dispatch('logOut');
    },
  },
  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },
};
</script>
