export default {
    incrementCounter(state) {
        state.counter++;
    },
    increaseByValue(state, payload) {
        console.log(state)
        state.counter += payload.value
    },
}