<template>
  <div>
    <header class="text-gray-300 body-font">
      <div
        class="
          container
          mx-auto
          flex flex-wrap
          py-5
          flex-col
          md:flex-row
          items-center
        "
      >
        <NuxtLink
          to="/"
          class="
            flex
            title-font
            font-medium
            items-center
            text-gray-300
            mb-4
            md:mb-0
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-600 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-2xl"
            >Easy<span class="text-indigo-400">Eats</span>.</span
          >
        </NuxtLink>
        <nav
          class="
            md:ml-auto
            flex flex-wrap
            items-center
            text-base
            justify-center
          "
        >
          <NuxtLink
            to="/"
            :class="
              $route.path == '/' || $route.params.category
                ? 'text-indigo-500 bg-gray-800'
                : ''
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              /></svg
          ></NuxtLink>
          <NuxtLink
            to="/Cart"
            :class="
              $route.path == '/Cart' ||
              $route.path == '/status/' + $route.params.id
                ? 'text-indigo-500 bg-gray-800'
                : ''
            "
            class="relative"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clip-rule="evenodd"
              />
            </svg>
            <div
              v-if="cartItemsLength > 0"
              class="w-6 h-6 bg-indigo-500 text-gray-200 flex items-center justify-center rounded-full absolute top-0 right-0 transform translate-x-1 -translate-y-2"
            >
              {{ cartItemsLength }}
            </div>
          </NuxtLink>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    cartItemsLength() {
      return (this.$store.state.cart || []).length
    }
  }
}
</script>

<style scoped>
nav a,
nav button {
  @apply ml-3 p-2 rounded-lg hover:text-indigo-500;
}
</style>
