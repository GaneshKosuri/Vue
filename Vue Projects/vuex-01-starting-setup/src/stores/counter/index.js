import counterActions from "./actions.js"
import counterGetters from "./getters.js"
import counterMutations from "./mutations.js"


const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: counterMutations,
    getters: counterGetters,
    actions: counterActions
}

export default counterModule