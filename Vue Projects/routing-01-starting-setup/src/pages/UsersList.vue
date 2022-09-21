<template>
  <button @click="goToTeamsRoute">Go to Teams List</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      isDataSaved: false,
    };
  },
  methods: {
    goToTeamsRoute() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.isDataSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('guard in userslist cmp');
    console.log(to, from);
    console.log(next());
  },
  beforeRouteLeave(to, from, next) {
    console.log('before route leaves');
    console.log(to, from);
    if (this.isDataSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        'Are you sure? you have un saved changes'
      );
      next(userWantsToLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
