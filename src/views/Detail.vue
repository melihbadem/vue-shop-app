<template>
  <Toast v-if="show" />
  <div class="flex flex-wrap sm:flex-wrap lg:flex-nowrap">
    <div class="w-full sm:w-full lg:w-1/2 sm:p-10 lg:p-10 lg:mx-auto">
        <img alt="Product" :src="product.image" />
    </div>
     <div class="w-full sm:p-10 lg:p-10 lg:mx-auto sm:w-full lg:w-1/2">
        <h1 class="text-2xl font-bold">
            {{ product.title }}
        </h1>
        <p class="font-bold mt-4 text-xl">
            ${{ product.price}}
        </p>
        <p class="mt-4 font-light">
            {{ product.description }}
        </p>
        <button :disabled="show" @click="addToCart" class="bg-transparent w-full mt-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-2">
            Add to cart
        </button>
    </div>
  </div>
</template>

<script>
import Toast from "../components/Toast.vue"
import { productStore } from "../store/products"
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"

export default {
    components: {
        Toast
    },

    setup() {
        const store = productStore()
        const route = useRoute()

        let show = ref(false)
        let product = ref({})

        onMounted(() => {
            product.value = store.getProductById(route.params.id)
            if (!product.value) useRouter().push("/")
        })

        const addToCart = () => {
            store.addProductToCart(product.value)
            showToast()
        }

        const showToast = () => {
            show.value = true
            setTimeout(() => show.value = false, 3000)
        }
      
        return {
            product,
            show,
            addToCart
        }
    }
}
</script>

<style>

</style>