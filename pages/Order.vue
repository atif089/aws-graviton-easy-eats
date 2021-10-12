<template>
  <div class="text-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-20 mx-auto block w-20 text-indigo-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <h1 class="text-indigo-200 text-3xl my-4">Order Placed Successfully</h1>
    <p class="text-gray-400 text-xl">
      Order id: #4e7ef405-6993-4f01-94af-1d72c083b41c
    </p>
    <p class="text-gray-400 text-xl">Order amount: $50</p>
    <div class="status bg-gray-800 my-4 rounded-lg py-4 px-8 inline-block">
      <h3 class="text-2xl text-gray-500">Status:</h3>
      <h1 class="text-4xl text-indigo-400">Pending</h1>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'SelectedItem',
  async asyncData({ $axios }) {
    const order = await $axios.get('http://localhost:3000/api/order')
    console.log(order)
  }
}
</script>

<style></style>
