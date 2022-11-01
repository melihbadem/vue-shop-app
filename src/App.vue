<template>
  <div class="w-9/12 mx-auto">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
