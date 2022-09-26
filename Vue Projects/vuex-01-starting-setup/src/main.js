import { createApp } from 'vue';
import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        incrementCounter(state) {
            state.counter++;
        },
        increaseByValue(state, payload) {
            state.counter += payload.value
        }
    }
})

import App from './App.vue';

const app = createApp(App);

app.use(store)

app.mount('#app');
