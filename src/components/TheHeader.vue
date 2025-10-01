<script setup>
import { RouterLink } from "vue-router";
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
import UIShape from "@/components/UI/UIShape.vue";
import UIContainer from "@/components/UI/UIContainer.vue";
import ResumeButton from "@/components/ResumeButton.vue";
</script>

<template>
  <section class="-mt-20 py-0 grid place-items-center">
    <UIContainer class="relative grid grid-cols-2 h-full items-center">
      <header
        class="w-full min-w-min py-24 col-start-1 row-start-1 col-span-2 sm:col-span-1 text-center sm:text-left justify-center sm:justify-start"
      >
        <p class="mb-4 text-lg text-accent">Hi, my name is</p>
        <h1 class="text-5xl sm:text-6xl lg:text-7xl mb-4">Gavin Brown</h1>
        <h2
          class="font-copy text-2xl sm:text-3xl lg:text-4xl mb-16 text-secondary font-semibold"
        >
          Making Digital experiences <br />
          smooth and simple.
        </h2>

        <div
          class="flex flex-wrap sm:flex-nowrap gap-8 justify-center sm:justify-start"
        >
          <RouterLink to="#experience">
            <UIButtonAnim class="h-full">Experience</UIButtonAnim>
          </RouterLink>
          <ResumeButton>Download Resume</ResumeButton>
        </div>
      </header>

      <div
        class="col-start-1 row-start-1 col-span-2 sm:col-start-2 justify-self-end h-2/3 w-full relative -z-1 flex items-center"
      >
        <UIShape />
      </div>
    </UIContainer>
  </section>
</template>
