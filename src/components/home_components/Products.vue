<template>
  <Banner />
  <div v-if="store.hasProducts"  class="flex flex-wrap justify-between">
      <ProductItem v-for="product in store.products" :product="product" :key="product.id" />
  </div>
  <Spinner v-else /> 
</template>

<script>
import { onMounted } from "vue"
import { productStore } from "../../store/products"
import Banner from "../Banner.vue"
import ProductItem from "./ProductItem.vue"
import Spinner from "../Spinner.vue"

export default {
    name: "Products",
    components: {
        Banner,
        ProductItem,
        Spinner,
    },
    setup() {
      const store = productStore()

      onMounted(() => store.fetchProducts())

      return {
        store
      }
    }
}
</script>

<style>

</style>
