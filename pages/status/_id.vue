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
    <p class="text-gray-500 text-xl">
      Order id: <span class="text-gray-400">{{ $route.params.id }}</span>
    </p>
    <p class="text-gray-500 text-xl my-2">
      Order amount:
      <span class="text-gray-400"
        >${{ orderStatus.data.order_data_extrapolated.slice(-2) }}
      </span>
    </p>
    <p class="text-gray-500 text-xl">
      Order placed at:
      <span class="text-gray-400">{{
        new Date(orderStatus.headers.date).toLocaleTimeString('en-US')
      }}</span>
    </p>
    <div class="status bg-gray-800 my-4 rounded-lg py-4 px-8 inline-block">
      <h3 class="text-2xl text-gray-500">Status:</h3>
      <h1 class="text-4xl text-indigo-400">{{ orderStatus.data.status }}</h1>
    </div>
    <div>
      <NuxtLink
        class="text-gray-400 hover:text-indigo-400 inline-flex items-center justify-center gap-2"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-9 w-auto "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        back to homepage</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  layout: 'SelectedItem',
  async asyncData({ $axios, route }) {
    const orderStatus = await $axios.get(
      'http://localhost:3000/api/order/' + route.params.id
    )

    return { orderStatus }
  }
}
</script>

<style></style>
