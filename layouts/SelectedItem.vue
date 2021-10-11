<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <Navbar />
    <div class="container mx-auto">
      <button
        class="p-2 mb-4 rounded-lg bg-gray-800 hover:text-indigo-600 transition duration-500"
        @click="$router.back()"
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
      </button>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
