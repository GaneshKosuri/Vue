const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    setConfirmedName(event) {
      const { target: { value } } = event
      this.confirmedName = value
    },
    increment(num) {
      this.counter += num
    },
    decrement(num) {
      this.counter -= num
    },
    updateName(e, lastName) {
      const { target: { value } } = e
      this.name = value + " " + lastName
    },
    submitForm(event) {
      // event.preventDefault()
      alert('form submitted')
    }
  }
});

app.mount('#events');
