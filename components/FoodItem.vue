<template>
  <NuxtLink
    :to="'/' + item.id"
    class="group cursor-pointer bg-gray-800 p-3 rounded-lg"
  >
    <div class="flex md:block">
      <div
        class="
          relative
          thumbnail
          overflow-hidden
          h-auto
          md:h-48
          w-48
          md:w-full
          rounded-lg
          object-cover

        "
      >
        <img
          :src="
            item.item_image ||
              'https://foodish-api.herokuapp.com/images/pasta/pasta27.jpg'
          "
          class="
            h-full
            w-full
            rounded-lg
            object-cover
            block
            mx-auto
            transform
            group-hover:scale-110
            transition-transform
            duration-500
            ease-in-out
          "
          alt=""
        />
        <button
          class="
            rounded-full
            w-10
            h-10
            p-0
            border-0
            inline-flex
            items-center
            justify-center
            hover:text-indigo-500
            focus:text-indigo-500
            ml-4
            bg-gray-700 bg-opacity-70
            hover:bg-opacity-100
            absolute
            top-2
            right-2
            z-10
          "
          @click.prevent=""
        >
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            ></path>
          </svg>
        </button>
      </div>

      <div class="flex justify-between items-center mt-4">
        <div>
          <h1>{{ item.item_name }}</h1>
          <small class="text-gray-400">Burger King</small>
        </div>
        <p
          class="
            bg-indigo-700
            group-hover:bg-indigo-600
            transition
            rounded-lg
            p-1
            px-3
          "
        >
          ${{ item.item_price }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style></style>
