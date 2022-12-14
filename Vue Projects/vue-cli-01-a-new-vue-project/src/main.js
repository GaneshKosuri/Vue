import { createApp } from 'vue';
import App from "./App.vue"
import FriendContact from "./components/FriendContact/FriendContact.vue"
import NewFriend from "./components/NewFriend/NewFriend.vue"

const app = createApp(App)

app.component('new-friend', NewFriend)
app.component('friend-contact', FriendContact)

app.mount('#app');