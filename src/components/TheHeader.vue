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
      <header>
        <h1>Gavin Brown</h1>
        <h2 class="mb-8">Front-end Developer</h2>
        <p class="mb-12 text-xl">
          Creating web interfaces to make your digital experiences smooth and
          some more words here.
        </p>

        <div class="flex gap-8">
          <RouterLink to="/about">
            <UIButtonAnim>About</UIButtonAnim>
          </RouterLink>
          <UIButtonAnim>
            <RouterLink to="/">Home</RouterLink>
          </UIButtonAnim>
        </div>
      </header>

      <div class="relative -z-1 flex h-2/3 w-full items-center">
        <UIShape />
      </div>
    </UIContainer>
  </section>
</template>
