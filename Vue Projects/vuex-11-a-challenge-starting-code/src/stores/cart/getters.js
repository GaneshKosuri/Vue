export default {
    cart(state) {
        return state.cart
    },
    cartTotal(state) {
        return state.cart.total.toFixed(2);
    },
    cartQuantity(state) {
        return state.cart.qty;
    }
}