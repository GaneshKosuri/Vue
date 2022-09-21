<template>
  <button @click="goToUsersRoute">Go to Users List</button>
  <ul>
    <teams-item
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></teams-item>
  </ul>
  <router-view></router-view>
</template>

<script>
import TeamsItem from '../components/teams/TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  inject: ['teams'],
  methods: {
    goToUsersRoute() {
      this.$router.push('/users');
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
