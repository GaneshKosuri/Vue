export default {
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