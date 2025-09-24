<template>
  <section>
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <div class="grid sm:grid-cols-[auto_1fr] justify-between gap-x-6">
        <div class="col-span-full mb-12">
          <h2 class="w-min text-nowrap relative text-shadow-lg inline">
            Where I've worked
            <div
              class="-z-10 absolute bottom-0 -left-1 -right-8 h-1/4 bg-secondary/70"
            />
          </h2>
          <p class="mt-4 max-w-2xl">
            I have worked with a variety of companies, from small startups to
            large corporations. My experience includes front-end development,
            back-end development, and project management.
          </p>
        </div>

        <WorkTabs />
        <WorkDesc :current-exp="currentWork" />
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import { currentWork } from "@/utils/useProjects.js";
import UIContainer from "@/components/UI/UIContainer.vue";
import WorkTabs from "@/components/WorkTabs.vue";
import WorkDesc from "@/components/WorkDesc.vue";

import { fadeInBottom } from "@/utils/animations.js";
</script>
