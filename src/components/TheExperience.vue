<template>
  <section>
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <div
        class="max-w-4xl mx-auto grid sm:grid-cols-[auto_1fr] justify-between gap-x-6"
      >
        <div class="col-span-full mb-12">
          <UIHeadingAnim>Where I've worked</UIHeadingAnim>
          <p class="mt-4 max-w-2xl">
            I have worked with a variety of companies, from small startups to
            large corporations. My experience includes front-end development,
            back-end development, and project management.
          </p>
        </div>

        <WorkTabs class="mb-8 border-b border-t border-base-300" />
        <Transition name="fade" mode="out-in">
          <WorkDesc :current-exp="currentWork" :key="currentWork" />
        </Transition>
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import { currentWork } from "@/utils/useProjects.js";
import UIContainer from "@/components/UI/UIContainer.vue";
import UIHeadingAnim from "@/components/UI/UIHeadingAnim.vue";
import WorkTabs from "@/components/WorkTabs.vue";
import WorkDesc from "@/components/WorkDesc.vue";

import { fadeInBottom } from "@/utils/animations.js";
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
