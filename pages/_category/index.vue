<template>
  <div>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
    >
      <FoodItem v-for="item in menu" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    const menu = await store.state.menu.filter(item =>
      item.item_tags.includes(params.category)
    )

    return { menu }
  }
}
</script>
