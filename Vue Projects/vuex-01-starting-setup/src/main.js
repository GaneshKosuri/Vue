import { createApp } from 'vue';
import { createStore } from "vuex"


const counterModule = {
    namespaced: true,
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
            console.log(state)
            state.counter += payload.value
        },
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
        },
    },
    actions: {
        increment(context, payload) {
            setTimeout(function () {
                context.commit({
                    type: 'increaseByValue',
                    value: payload.value
                })
            }, 2000)
        },
        increase(context, payload) {
            context.commit('increaseByValue', payload)
        },
    }
}

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn
        }
    },
    actions: {
        logIn(context) {
            context.commit('setAuth', { isAuth: true })
        },
        logOut(context) {
            context.commit('setAuth', { isAuth: false })
        }
    }
})

import App from './App.vue';

const app = createApp(App);

app.use(store)

app.mount('#app');
