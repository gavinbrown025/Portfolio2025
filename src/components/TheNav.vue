<template>
  <div class="sticky top-0 !px-0">
    <UIContainer>
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
            'absolute w-full min-h-min top-5/6 left-0 text-lg bg-base-100 border-b',
            'sm:relative sm:flex sm:justify-end sm:basis-1/2 sm:items-center sm:bg-transparent',
            isOpen ? '' : 'hidden',
          ]"
        >
          <li
            class="not-sm:w-full not-sm:px-8 text-lg sm:text-base hover:bg-secondary/20 transition-background duration-300"
          >
            <RouterLink
              to="/#profile"
              class="block px-4 py-2"
              :class="{ 'text-accent': activeView == 'profile' }"
              @click="isOpen = false"
              @keydown.enter="isOpen = false"
            >
              Profile
            </RouterLink>
          </li>
          <li
            class="not-sm:w-full not-sm:px-8 text-lg sm:text-base hover:bg-secondary/20 transition-background duration-300"
          >
            <RouterLink
              to="/#experience"
              class="block px-4 py-2"
              :class="{ 'text-accent': activeView == 'experience' }"
              @click="isOpen = false"
              @keydown.enter="isOpen = false"
            >
              Experience
            </RouterLink>
          </li>
          <ProjectsDropdown
            class="not-sm:w-full not-sm:px-8 text-lg sm:text-base sm:hover:bg-secondary/20 transition-background duration-300"
            :isNav="true"
            @close="isOpen = false"
          >
            <div
              class="block px-4 py-2"
              :class="{
                'text-accent':
                  $route.name == 'showcase' || activeView == 'projects',
              }"
            >
              Projects
            </div>
          </ProjectsDropdown>
          <li
            class="not-sm:w-full not-sm:px-8 text-lg sm:text-base hover:bg-secondary/20 transition-background duration-300"
          >
            <RouterLink
              to="/#contact"
              class="block px-4 py-2"
              :class="{ 'text-accent': activeView == 'contact' }"
              @click="isOpen = false"
              @keydown.enter="isOpen = false"
            >
              Contact
            </RouterLink>
          </li>
        </ul>
      </nav>
    </UIContainer>
  </div>
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
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];
</script>
