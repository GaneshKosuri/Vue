export default {
    addToCart(context, prodId) {
        const products = context.rootGetters['products']
        const cartProduct = products.find(product => product.id === prodId)
        context.commit('addProductToCart', cartProduct)
    },
    removeFromCart(context, prodId) {
        context.commit('removeProductFromCart', prodId)
    }
}