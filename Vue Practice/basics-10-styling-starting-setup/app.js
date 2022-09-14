const app = Vue.createApp({
    data() {
        return {
            isBoxASelected: false,
            isBoxBSelected: false,
            isBoxCSelected: false
        }
    },
    computed: {
        boxAClasses() {
            return {
                active: this.isBoxASelected
            }
        },
        boxBClasses() {
            return {
                active: this.isBoxBSelected
            }
        },
        boxCClasses() {
            return {
                active: this.isBoxCSelected
            }
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.isBoxASelected = !this.isBoxASelected
            } else if (box === 'B') {
                this.isBoxBSelected = !this.isBoxBSelected
            } else {
                this.isBoxCSelected = !this.isBoxCSelected
            }
        }
    },
})

app.mount("#styling")