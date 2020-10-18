<template>
  <div
    class="relative bg-top bg-cover"
    :style="{
      height: 'calc((100vh - 4rem) / 1.5)',
      backgroundImage: `url(${hero})`,
    }"
  >
    <div class="absolute inset-0 bg-black bg-opacity-75"></div>
    <div
      class="absolute inset-0 flex flex-col justify-center items-center h-full"
    >
      <div class="flex mb-10">
        <h1
          class="flex flex-col items-center text-5xl text-gray-200 font-roboto"
        >
          <span>Magick</span>
          <span>Web Design</span>
        </h1>
      </div>
      <div class="flex">
        <NuxtLink
          to="/work"
          class="font-rubik text-xl px-6 py-2 border border-blue-600 rounded shadow text-gray-200 cursor-pointer transform transition duration-200 hover:scale-110 hover:bg-blue-700"
        >
          Work
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import hero from 'assets/images/hero_1.jpg'

export default {
  name: 'Header',
  data: () => ({
    hero,
  }),
}
</script>
