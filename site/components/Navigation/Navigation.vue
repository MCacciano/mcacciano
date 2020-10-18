<template>
  <nav
    class="sticy top-0 left-0 flex justify-center w-full h-16 border-b border-gray-600"
  >
    <div class="flex w-full max-w-screen-xl px-6 font-rubik">
      <div class="flex justify-center items-center">
        <NuxtLink to="/">
          <h2 class="flex flex-col items-start text-xl md:text-2xl font-medium">
            <span>Magick</span>
          </h2>
        </NuxtLink>
      </div>
      <div class="flex-1 flex justify-end">
        <ul class="flex md:text-lg font-normal">
          <li class="h-full">
            <NuxtLink to="/" class="h-full flex items-center mx-4">
              Work
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>
