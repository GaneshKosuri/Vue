const app = Vue.createApp({
    data() {
        return {
            message: "Hello Ganesh Kosuri",
            vueLink: "https://vuejs.org/guide/quick-start.html#without-build-too",
            goalOne: "<h1>Learn React in the Official Documentaion</h1>",
            goalTwo: "<h3>Learn Vue in the Udemy Course</h3>"
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            if (randomNumber > 0.5) {
                return this.goalOne
            }
            return this.goalTwo
        }
    }
})

app.mount('#user-goal')