import { defineStore } from "pinia"

export const productStore = defineStore("products", {
    state: () => ({
        products: [],
        cart: []
    }),
    getters: {
        getProductById: (state) => {
            return (id) => state.products.find((product) => product.id == id)
        },
        hasProducts: (state) => state.products.length !== 0,
        hasCartItem: (state) => state.cart.length !== 0
    },
    actions: {
        async fetchProducts() {
            await fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(data => this.products = data)
                .catch(err => console.log(err))
        },
        addProductToCart(payload) {
            const hasProduct = this.cart.filter((item) => item.id === payload.id)
            if (hasProduct.length > 0) {
                return
            }
            this.cart.push(payload)
        }
    }
})
