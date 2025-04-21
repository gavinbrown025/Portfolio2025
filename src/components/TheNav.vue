<template>
  <UIContainer class="!px-0">
    <nav
      class="flex justify-between px-8 py-4 sm:bg-transparent"
      :class="isOpen ? 'bg-gb-dk-purple' : ''"
    >
      <UILogo />
      <button
        @click="isOpen = !isOpen"
        class="flex items-center sm:hidden text-3xl focus:outline-none cursor-pointer hover:bg-gb-lt-purple transition-background duration-300"
      >
        <UIIcon class="!text-[3rem]" icon="menu" />
      </button>
      <ul
        v-motion
        :initial="fadeInTop.initial"
        :visible="fadeInTop.enter"
        :class="[
          // 'flex basis-1/2 items-center justify-end border-b text-lg',
          'absolute w-full min-h-min top-5/6 left-0 text-lg bg-gb-dk-purple border-b',
          'sm:relative sm:basis-1/2 sm:flex sm:justify-end sm:basis-1/2 sm:items-center sm:bg-transparent',
          isOpen ? '' : 'hidden',
        ]"
      >
        <li
          v-for="link in links"
          :key="link.to"
          class="w-full sm:w-auto px-8 sm:px-0 text-lg sm:text-base hover:bg-gb-lt-purple transition-background duration-300"
          @click="isOpen = false"
          @keydown.enter="isOpen = false"
          >
          <a class="block text-right px-4 py-2" :href="link.to">{{
            link.name
          }}</a>
        </li>
      </ul>
    </nav>
  </UIContainer>
</template>

<script setup>
import { ref, watch } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

import { fadeInTop } from "@/utils/animations.js";

import UILogo from "@/components/UI/UILogo.vue";
import UIIcon from "@/components/UI/UIIcon.vue";
import UIContainer from "@/components/UI/UIContainer.vue";

const isOpen = ref(false);

const isLarge = useBreakpoints(breakpointsTailwind).greaterOrEqual("sm");
watch(isLarge, (nv) => nv && (isOpen.value = false));

const links = [
  { name: "Work", to: "#work" },
  { name: "Profile", to: "#profile" },
  { name: "Contact", to: "#contact" },
];
</script>
