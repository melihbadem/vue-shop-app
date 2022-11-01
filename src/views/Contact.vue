<template>
  <div class="flex flex-wrap sm:flex-wrap lg:flex-nowrap mt-5">
    <div class="w-full sm:w-full lg:w-6/12">
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">First name</label>
      <input type="text" class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Name" required>

      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
      <input type="email" class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Email" required>      

      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Message</label>
      <textarea rows="5" class="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Message" required></textarea>

     <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Submit
      </button>
    </div>
    <div class="w-full sm:w-full lg:w-6/12">
      <img class="mx-auto w-full sm:w-full lg:w-9/12" alt="contact" src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
