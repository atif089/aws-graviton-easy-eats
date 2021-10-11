<template>
  <div class="container mx-auto">
    <div class="flex items-stretch gap-8">
      <div
        class="thumbnail flex-grow max-w-2xl transform rounded-lg overflow-hidden"
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
      <div class="info min-h-full">
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
        <div class="mt-4">
          <small class="pb-2 inline-block text-gray-300">Quantity:</small>
          <QuantityCounter @quantity="updateQuantity" />
        </div>
        <div class="mt-6">
          <button
            class="
            
            bg-indigo-700
            text-xl
            px-4
            py-2
            rounded-lg
            inline-block
            
            hover:bg-indigo-800
          "
            @click="addToCart"
          >
            Taste it for
            <span class="font-semibold">${{ foodItem.item_price }}</span>
          </button>
        </div>
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
  },
  data() {
    return {
      item: {
        item_id: this.$route.params.id,
        quantity: 1
      }
    }
  },
  methods: {
    async addToCart() {
      await this.$store.dispatch('addToCart', this.item)
      this.$router.push({ name: 'Cart' })
    },
    updateQuantity(quantity) {
      this.item.quantity = quantity
    }
  }
}
</script>

<style></style>
