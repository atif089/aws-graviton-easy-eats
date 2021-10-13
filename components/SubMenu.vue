<template>
  <div>
    <nav
      class="
        submenu
        container
        flex
        flex-wrap
        justify-center
        gap-3
        md:gap-8
        my-8
        mx-auto
        text-gray-400
        border-b border-gray-800
       
      "
    >
      <NuxtLink to="/">{{ tags.slice(0, 1)[0] }}</NuxtLink>
      <NuxtLink v-for="tag in tags.slice(1)" :key="tag" :to="tag">{{
        tag
      }}</NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: []
    }
  },
  async fetch() {
    const allTags = await this.$store.state.menu
      .map(item => item.item_tags)
      .flat()
      .reverse()
    this.tags = [...new Set(allTags)]
  }
}
</script>

<style>
.submenu a {
  @apply cursor-pointer border-b border-transparent pb-0.5 hover:border-indigo-500 hover:text-white transition;
}

.submenu a.nuxt-link-exact-active {
  @apply border-b-2 border-indigo-400 text-white;
}
</style>
