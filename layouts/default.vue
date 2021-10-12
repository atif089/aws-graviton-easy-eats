<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <Navbar />
    <SubMenu />
    <transition name="home">
      <Nuxt class="container mx-auto" />
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
body {
  font-family: 'Questrial', sans-serif;
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
