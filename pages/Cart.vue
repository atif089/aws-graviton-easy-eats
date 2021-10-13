<template>
  <div class="flex gap-8 mt-4">
    <div class="w-2/5">
      <h1 class="text-2xl mb-1">Order Details</h1>
      <small class="text-gray-500 block mb-8"
        >*Please fill order details below to place order.</small
      >
      <form @submit.prevent="saveUserDetails">
        <label for="name" class="pb-2">Name:</label>
        <input
          id="name"
          v-model="order.billing_name"
          required
          type="text"
          class="
            w-full
            block
            mb-8
            max-w-sm
            px-2
            py-1
            text-gray-800
            rounded-lg
            text-2xl
            focus:border-none
            focus:outline-none
            focus:ring-2
            ring-indigo-600
          "
        />
        <label for="tel" class="pb-2">Phone Number:</label>
        <input
          id="tel"
          v-model="order.phone_number"
          required
          type="tel"
          class="
            w-full
            block
            mb-8
            max-w-sm
            px-2
            py-1
            text-gray-800
            rounded-lg
            text-2xl
            focus:border-none
            focus:outline-none
            focus:ring-2
            ring-indigo-600
          "
        />
        <input
          type="submit"
          class="
            bg-indigo-800
            px-4
            py-2
            rounded-lg
            cursor-pointer
            text-xl
            hover:bg-indigo-700
          "
        />
      </form>
    </div>
    <div class="flex-grow divide-y divide-gray-800 space-y-px">
      <h1 class="text-2xl mb-8">
        Order List
        <span class="text-indigo-500 font-sans pl-2">
          ( {{ cartItems.length }} )</span
        >
      </h1>
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="flex items-center gap-8 text-2xl mb-8 py-2"
      >
        <img
          :src="
            item.item_image ||
            'https://foodish-api.herokuapp.com/images/pasta/pasta23.jpg'
          "
          class="h-20 w-20 rounded-full object-cover"
          alt=""
        />

        <h1>{{ item.item_name }}</h1>
        <div class="ml-auto flex flex-col">
          <button
            class="
              ml-auto
              mb-4
              bg-gray-800
              text-indigo-300
              rounded-lg
              p-2
              text-xl
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h4>{{ item.quantity }} &nbsp; x &nbsp; ${{ item.item_price }}</h4>
        </div>
      </div>
      <div
        v-if="cartItems.length > 0"
        class="
          !mt-8
          flex
          items-center
          justify-between
          !border-t-2
          border-dashed
          !border-gray-600
        "
      >
        <button
          class="px-4 py-2 rounded-lg text-xl"
          :class="
            validUser
              ? 'bg-indigo-800 hover:bg-indigo-700 cursor-pointer'
              : 'bg-gray-800 cursor-not-allowed'
          "
          @click="placeOrder"
        >
          Place Order
        </button>
        <h1 class="text-4xl py-4">
          Total: <span class="text-indigo-500 pl-2">${{ total }}</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'SelectedItem',
  async asyncData({ store }) {
    const state = await store.state
    const cartItems = await state.cart.map((cartItem) => {
      const itemExisted = state.menu.find(
        (menuItem) => menuItem.id === cartItem.item_id
      )
      return Object.assign(itemExisted, { quantity: cartItem.quantity })
    })
    return { cartItems }
  },
  data() {
    return {
      order: {
        billing_name: '',
        delivery_coordinates: '',
        phone_number: null,
        order_data: '',
      },
      validUser: false,
    }
  },
  computed: {
    total() {
      return this.cartItems.reduce(
        (acc, val) => acc + val.item_price * val.quantity,
        0
      )
    },
  },
  methods: {
    saveUserDetails() {
      if (this.validateTelephone(this.order.phone_number)) {
        this.validUser = true
      }
    },

    async placeOrder() {
      if (this.validUser) {
        await this.$axios.post('/api/order', {
          ...this.order,
          order_data: this.$store.state.cart,
        })
        this.$router.push({ name: 'Order' })
      }
    },
    validateTelephone(tel) {
      const regex =
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
      return regex.test(tel)
    },
  },
}
</script>

<style></style>
