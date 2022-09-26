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
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2
        },
        nomalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter
            if (finalCounter < 0) return 0
            else if (finalCounter > 100) return 100
            return finalCounter
        }
    },
    actions: {
        increment(context) {
            console.log("context", context)
            setTimeout(function () {
                context.commit({
                    type: 'increaseByValue',
                    value: 50
                })
            }, 5000)
        },
        increase(context, payload) {
            context.commit('increaseByValue', payload)
        }
    }
})

import App from './App.vue';

const app = createApp(App);

app.use(store)

app.mount('#app');
