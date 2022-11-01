<template>
  <div class="mt-4 w-full sm:w-full lg:w-3/6 p-1">
    <div class="bg-slate-200 p-5">
      <h1 class="font-light">{{ product.title }}</h1>
        <div class="flex">
            <div class="w-3/5 border text-xs">
              <p class="mt-4 mb-4">
                  {{ product.description }}
              </p>
              <router-link class="text-blue-500 hover:underline" :to="'/detail/' + product.id">
                View more
              </router-link>
            </div>
            <div class="w-2/5">
              <router-link :to="'/detail/' + product.id">
                <img alt="product" class="object-fill h-48 mx-auto" :src="product.image" />
              </router-link>
            </div>
        </div>
    </div>
  </div>
</template>
 
<script>
export default {
    name: "ProductItem",
    props: ["product"],
 
}
</script>

<style>

</style>
