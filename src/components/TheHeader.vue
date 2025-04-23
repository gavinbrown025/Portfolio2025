<script setup>
import { RouterLink } from "vue-router";
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
import UIShape from "@/components/UI/UIShape.vue";
import UIContainer from "@/components/UI/UIContainer.vue";
</script>

<template>
  <section>
    <UIContainer
      class="relative -mt-20 mb-20 grid grid-cols-2 h-screen min-h-min items-center"
    >
      <header class="w-full min-w-min py-24 col-start-1 row-start-1 col-span-2 sm:col-span-1 text-center sm:text-left justify-center sm:justify-start">
        <h1 class="text-[3.5rem] lg:text-5xl">Gavin Brown</h1>
        <h2 class="mb-8">Frontend Developer</h2>
        <p class="mb-16">
          Creating web interfaces to make your digital experiences smooth and
          some more words here.
        </p>

        <div class="flex flex-wrap sm:flex-nowrap  gap-8 justify-center sm:justify-start">
          <RouterLink to="#experience">
            <UIButtonAnim>Experience</UIButtonAnim>
          </RouterLink>
          <UIButtonAnim>
            <RouterLink to="/">Resume</RouterLink>
          </UIButtonAnim>
        </div>
      </header>

      <div class="col-start-1 row-start-1 col-span-2 sm:col-start-2 sm:col-start-2 justify-self-end h-2/3 w-full relative -z-1 flex items-center">
        <UIShape />
      </div>
    </UIContainer>
  </section>
</template>
