<template>
  <div v-if="store.hasCartItem" class="flex flex-wrap justify-between">
    <div v-for="product in store.cart" :key="product.id" style="width: 48%" class="bg-slate-200 mt-4 p-5">
      <h1 class="font-light">{{ product.title }}</h1>
      <div class="flex">
        <div class="w-3/5 border text-xs">
          <p class="mt-4 mb-4">
            {{ product.description }}
          </p>
        </div>
        <div class="w-2/5">
          <img alt="product" class="object-fill h-48 mx-auto" :src="product.image" />
        </div>
    </div>
  </div>
 </div>

 <div v-else class="text-center">
    There are no products in the cart.
 </div>
</template>

<script>
import { productStore } from "../store/products"

export default {
  name: "Cart",

  setup() {
    const store = productStore()

    return {
      store
    }
  }
}
</script>

<style>

</style>