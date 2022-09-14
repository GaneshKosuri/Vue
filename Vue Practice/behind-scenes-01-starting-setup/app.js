const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userInput.value;
      // console.dir(this.$refs.userInput)
    },
  },
  beforeCreate() {
    console.log("before Create")
  },
  created() {
    console.log("instance created")
  },
  beforeMount() {
    console.log(this)
    console.log("before Mount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("before update")
  },
  updated() {
    console.log("updated")
  },
  beforeUnmount() {
    console.log("before un mount")
  },
  unmounted() {
    console.log("un mounted")
  },
});

app.mount('#app');

setTimeout(() => {

  app.unmount()
}, 4000)



const app2 = Vue.createApp({
  template: `
  <p>{{favFood}}</p>
  `,
  data() {
    return {
      favFood: "Biryani"
    }
  }
})

app2.mount('#app2')






// without reactivity in JS (Default)


// let message = "Hello!"

// let longMessage = message + ' World'

// message = "Hello!!!"

// console.log(longMessage)


// With Reactivity using Proxy

// const data = {
//   message: "Hello!",
//   longMessage: "JS"
// }

// const handler = {
//   set(target, key, value) {
//     if (key === 'message') {
//       target.longMessage = value + " World"
//     }
//     target.message = value
//   }
// }

// const myProxy = new Proxy(data, handler)

// myProxy.message = "Hello!!!"

// console.log(myProxy.longMessage)
