const app = Vue.createApp({
    data() {
        return {
            visibleDetails: false,
            friends: [
                { id: "1", name: "Siva", number: "8985318948", email: "siva@gmail.com" },
                { id: "2", name: "Aravind", number: "7093882010", email: "aravind@gmail.com" },
                { id: "3", name: "Siva Prasad", number: "91334567894", email: "sivaprasad@gmail.com" },
                { id: "4", name: "venkatesh", number: "7845129645", email: "venkatesh@gmail.com" },
                { id: "5", name: "Vinod", number: "8235318948", email: "vinod@gmail.com" },
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.visibleDetails = !this.visibleDetails
        }
    },
})

app.component('friend-contact', {
    template: `
    <li >
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">
            {{visibleDetails? "Hide": "Show"}} Details
          </button>
          <ul v-if="visibleDetails">
            <li><strong>Phone:</strong> {{friend.number}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
    `,
    data() {
        return {
            visibleDetails: false,
            friend: { id: "1", name: "Siva", number: "8985318948", email: "siva@gmail.com" },
        }
    },
    methods: {
        toggleDetails() {
            this.visibleDetails = !this.visibleDetails
        }
    },
})

app.component('friend-contact', {
    template: `
    <li >
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">
            {{visibleDetails? "Hide": "Show"}} Details
          </button>
          <ul v-if="visibleDetails">
            <li><strong>Phone:</strong> {{friend.number}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
    `,
    data() {
        return {
            visibleDetails: false,
            friend: { id: "2", name: "Aravind", number: "7093882010", email: "aravind@gmail.com" },
        }
    },
    methods: {
        toggleDetails() {
            this.visibleDetails = !this.visibleDetails
        }
    },
})

app.mount('#app')