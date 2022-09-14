const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullName: '',
      lastName: ''
    };
  },
  watch: {
    // name(value) {
    //   this.fullName = value ? value + ' ' + this.lastName : this.lastName
    // },
    // lastName(value) {
    //   this.fullName = value ? this.name + ' ' + value : this.name
    // }
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          console.log(this)
          this.counter = 0
        }, 2000)
      }
    }
  },
  computed: {
    fullName() {
      return (this.name && this.lastName) ? this.name + ' ' + this.lastName : ''
    },

  },
  methods: {
    getFullName() {
      return this.name ? this.name + ' ' + "Kosuri" : ''
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
      this.lastName = ""
    }
  }
});

app.mount('#events');
