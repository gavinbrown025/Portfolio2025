<template>
  <UIContainer class="sticky top-0 !px-0">
    <nav
      class="flex justify-between px-8 py-4 sm:bg-transparent"
      :class="isOpen ? 'bg-base-100' : ''"
    >
      <UILogo />

      <button
        @click="isOpen = !isOpen"
        class="flex items-center sm:hidden text-3xl focus:outline-none cursor-pointer hover:bg-secondary/20 transition-background duration-300"
      >
        <UIIcon class="!text-[3rem]" icon="menu" />
      </button>
      <ul
        v-motion
        :initial="fadeInTop.initial"
        :visible-once="fadeInTop.enter"
        :class="[
          // 'flex basis-1/2 items-center justify-end border-b text-lg',
          'absolute w-full min-h-min top-5/6 left-0 text-lg bg-base-100 border-b',
          'sm:relative sm:flex sm:justify-end sm:basis-1/2 sm:items-center sm:bg-transparent',
          isOpen ? '' : 'hidden',
        ]"
      >
        <ProjectsDropdown :isNav="true" @close="isOpen = false">
          <div class="block px-4 py-2" :class="{ 'text-accent': $route.name == 'showcase' }">Projects</div>
        </ProjectsDropdown>
        <li
          v-for="{ name, id } in links"
          :key="id"
          class="w-full sm:w-auto px-8 sm:px-0 text-lg sm:text-base hover:bg-secondary/20 transition-background duration-300"
          @click="isOpen = false"
          @keydown.enter="isOpen = false"
        >
          <RouterLink
            :to="`/#${id}`"
            class="block px-4 py-2"
            :class="{ 'text-accent': activeView == id }"
          >
            {{ name }}
          </RouterLink>
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
import ProjectsDropdown from "@/components/ProjectsDropdown.vue";

import { activeView } from "@/utils/useActiveView.js";

const isOpen = ref(false);

const isLarge = useBreakpoints(breakpointsTailwind).greaterOrEqual("sm");
watch(isLarge, (nv) => nv && (isOpen.value = false));

const links = [
  { name: "Profile", id: "profile" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];
</script>
