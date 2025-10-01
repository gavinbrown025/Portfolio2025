<script setup>
import { watchEffect, ref, computed } from "vue";
import TheNav from "@/components/TheNav.vue";
import TheContact from "@/components/TheContact.vue";
import SideBar from "@/components/SideBar.vue";
import TheFooter from "./components/TheFooter.vue";
import UIContainer from "@/components/UI/UIContainer.vue";
import SceneAnimCon from "@/components/SceneAnimCon.vue";

import { mainLoader } from "@/utils/animations.js";
import { useScroll } from "@vueuse/core";

import { fadeInBottom } from "@/utils/animations.js";

const { y, directions, isScrolling } = useScroll(window);

const showNav = ref(true);
const atTop = computed(() => y.value < 80);

watchEffect(() => {
  if (atTop.value) return (showNav.value = true);
  if (isScrolling.value) showNav.value = directions.top;
});
</script>

<template>
  <TheNav
    class="sticky z-10 transition-all duration-500"
    :class="{ '-translate-y-full': !showNav, 'bg-base-100/90': !atTop }"
  />

  <SideBar />

  <main
    v-motion
    :initial="mainLoader.initial"
    :enter="mainLoader.fadeIn"
    class="relative"
  >
    <RouterView />
    <TheContact id="contact" />

    <TheFooter />
  </main>
</template>
