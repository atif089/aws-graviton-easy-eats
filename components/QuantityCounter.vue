<template>
  <div>
    <div class="flex items-stretch ">
      <button
        class="w-10 h-10 text-2xl bg-gray-800 p-1 px-3 rounded-tl-lg rounded-bl-lg"
        @click="quantityMinus"
      >
        -
      </button>

      <input
        v-model="quantity"
        type="number"
        readonly
        value="1"
        class="text-gray-300 font-mono w-14 h-auto text-center pl-3 bg-gray-600 bg-opacity-70 font-semibold text-2xl outline-none border-none "
        min="1"
        max="20"
      />
      <button
        class="w-10 h-10 text-2xl bg-gray-800 p-1 px-3 rounded-tr-lg rounded-br-lg"
        @click="quantityPlus"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    quantityPlus() {
      if (this.quantity >= 20) return
      this.quantity += 1
      this.$emit('quantity', this.quantity)
    },
    quantityMinus() {
      if (this.quantity <= 1) return
      this.quantity -= 1
      this.$emit('quantity', this.quantity)
    }
  }
}
</script>

<style></style>
