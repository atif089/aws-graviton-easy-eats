<template>
  <div>
    <h1 class="text-2xl mb-8">
      Order List
      <span class="text-indigo-500 font-sans pl-2">
        ( {{ cartItems.length }} )</span
      >
    </h1>
    <div
      v-for="item in cartItems"
      :key="item.id"
      class="flex items-center gap-8 text-2xl mb-8"
    >
      <img
        :src="
          item.item_image ||
            'https://foodish-api.herokuapp.com/images/pasta/pasta23.jpg'
        "
        class="h-20 w-20 rounded-full"
        alt=""
      />

      <h1>{{ item.item_name }}</h1>
      <h4>{{ item.quantity }} &nbsp; x &nbsp; ${{ item.item_price }}</h4>
    </div>
    <div v-if="cartItems.length > 0">
      <h1 class="text-4xl mt-4 py-4 border-t-2 border-dashed border-gray-500">
        Total: <span class="text-indigo-500 pl-2">${{ total }}</span>
      </h1>
      <button
        class="bg-indigo-800 px-4 py-2 rounded-lg text-xl hover:bg-indigo-700"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'SelectedItem',
  async asyncData({ store }) {
    const state = await store.state
    const cartItems = await state.cart.map(cartItem => {
      const itemExisted = state.menu.find(
        menuItem => menuItem.id === cartItem.item_id
      )
      return Object.assign(itemExisted, { quantity: cartItem.quantity })
    })
    return { cartItems }
  },
  computed: {
    total() {
      return this.cartItems.reduce(
        (acc, val) => acc + val.item_price * val.quantity,
        0
      )
    }
  }
}
</script>

<style></style>
