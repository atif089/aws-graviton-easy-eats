<template>
  <div>
    <div class="grid grid-cols-4 gap-6">
      <FoodItem v-for="item in menu" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    const menu = await store.state.menu.filter((item) =>
      item.tags.includes('main-course')
    )
    return { menu }
  },
}
</script>

<style></style>
