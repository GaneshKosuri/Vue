import { createStore } from "vuex"

import rootGetters from "./getters.js"
import rootMutations from "./mutations.js"
import rootActions from "./actions.js"

import productModule from "./products"
import cartModule from './cart'

const appStore = createStore({
    modules: {
        productModule,
        cartModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters,

})



export default appStore