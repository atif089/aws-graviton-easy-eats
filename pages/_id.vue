<template>
  <div class="container mx-auto">
    <div class="my-4">
      <button @click="$router.back()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-auto"
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
    </div>
    <div class="flex gap-8">
      <div
        class="thumbnail flex-grow w-96 transform rounded-lg overflow-hidden"
      >
        <img
          :src="
            foodItem.item_image ||
              'https://foodish-api.herokuapp.com/images/pasta/pasta27.jpg'
          "
          class="h-full w-full"
          alt=""
        />
      </div>
      <div class="info flex-grow">
        <h4 class="category flex flex-wrap gap-2">
          <span
            v-for="tag in foodItem.item_tags"
            :key="tag"
            class="bg-indigo-700 px-3 rounded-2xl inline-block"
            >{{ tag }}</span
          >
        </h4>
        <h1 class="title text-4xl my-4">{{ foodItem.item_name }}</h1>
        <p class="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptatibus excepturi reiciendis illum quidem placeat consequatur
          quasi cumque vitae non, ullam delectus fugit ducimus, laborum quae
          odit. Provident, repellat quos.
        </p>
        <button
          class="
            bg-indigo-700
            text-xl
            px-4
            py-2
            rounded-lg
            my-6
            hover:bg-indigo-800
          "
        >
          Taste it for <span class="font-bold">${{ foodItem.item_price }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'SelectedItem',
  async asyncData({ params, store }) {
    const foodItem = await store.state.menu.find(item => item.id === params.id)

    return { foodItem }
  }
}
</script>

<style></style>
