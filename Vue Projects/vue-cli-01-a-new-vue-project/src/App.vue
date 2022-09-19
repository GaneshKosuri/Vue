<template>
  <section>
    <header>Hello Ganesh Kosuri</header>
    <new-friend @add-new-friend="addNewFriend" />
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :number="friend.number"
        :e-mail="friend.email"
        :is-favourite="friend.isFavourite"
        @toggle-favourite="toggleFriendFavourite"
        @delete-contact="delectContact"
      />
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
          isFavourite: false,
        },
        {
          id: "2",
          name: "Aravind",
          number: "9133451679",
          email: "aravind@gmail.com",
          isFavourite: true,
        },
        {
          id: "3",
          name: "Venkatesh",
          number: "7845159632",
          email: "venkatesh@gmail.com",
          isFavourite: false,
        },
      ],
    };
  },
  methods: {
    toggleFriendFavourite(friendId) {
      const friend = this.friends.find((frnd) => frnd.id === friendId);
      friend.isFavourite = !friend.isFavourite;
    },
    addNewFriend(friend) {
      this.friends.unshift(friend);
    },
    delectContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
  },
};
</script>
