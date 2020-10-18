<template>
  <div class="flex justify-center items-center p-4">
    <transition-group
      name="ctas"
      tag="ul"
      class="flex flex-col lg:flex-row w-full max-w-screen-sm lg:max-w-screen-lg"
    >
      <li
        v-for="(cta, i) in ctas"
        :key="cta.icon"
        :class="[`border-${cta.iconColor}`]"
        class="flex-1 border rounded shadow p-4 my-8 lg:m-3"
        @mouseenter="cta.hasFocus = true"
        @mouseleave="cta.hasFocus = false"
      >
        <div class="flex flex-col">
          <div class="flex justify-center">
            <div
              :class="[
                `border rounded-full shadow p-3 transform transition duration-300 ease-in-out border-${cta.iconColor}`,
                cta.hasFocus ? `scale-110` : ``,
              ]"
            >
              <fa-icon
                :icon="cta.icon"
                class="text-4xl"
                :class="[
                  i === 0 ? 'mx-2' : 'm-1',
                  cta.hasFocus ? `animate-pulse` : ``,
                  `text-${cta.iconColor}`,
                ]"
              />
            </div>
          </div>
          <div class="flex justify-center my-6">
            <p class="text-center text-lg font-roboto">{{ cta.text }}</p>
          </div>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Cta',
  data: () => ({
    ctas: [
      {
        icon: 'mobile-alt',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, ratione?',
        iconColor: 'blue-600',
        hasFocus: false,
      },
      {
        icon: 'cog',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, ratione?',
        iconColor: 'orange-600',
        hasFocus: false,
      },
      {
        icon: 'search',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, ratione?',
        iconColor: 'red-600',
        hasFocus: false,
      },
    ],
  }),
}
</script>

<style scoped>
.ctas-enter-active,
.ctas-leave-active {
  transition: all 1s;
}
.ctas-enter, .ctas-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
