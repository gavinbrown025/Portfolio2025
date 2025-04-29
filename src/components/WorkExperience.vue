<template>
  <section class="mb-80">
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <div class="grid grid-cols-2 justify-between gap-x-12 gap-y-34">
        <div class="shrink grow basis-[16rem]">
          <h2 class="mb-8">Work Experience</h2>
          <p class="mb-12">
            I have worked with a variety of companies, from small startups to
            large corporations. My experience includes front-end development,
            back-end development, and project management.
          </p>
          <div
            class="flex flex-wrap sm:flex-nowrap gap-8 justify-center sm:justify-start"
          >
            <UIButtonAnim
              v-for="(exp, i) in workExp"
              :key="exp.company"
              :active="selectedExp === i"
              @click="selectedExp = i"
            >
              {{ exp.company }}
            </UIButtonAnim>
          </div>
        </div>

        <div class="shrink grow basis-[16rem]">
          <h2>{{ currentExp.company }}</h2>
          <h3 class="mb-4">{{ currentExp.title }}</h3>
          <p>{{ currentExp.description }}</p>
        </div>

        <div class="min-w-[16rem] shrink grow basis-1/3 space-y-16">
          <h2 class="mb-8">{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <div class="flex gap-8">
            <a :href="project.link" target="_blank">
              <UIButtonAnim>Visit Site</UIButtonAnim>
            </a>
            <a v-if="project.code" :href="project.code" target="_blank">
              <UIButtonAnim>Source Code</UIButtonAnim>
            </a>
          </div>
        </div>

        <ProjectImages :images="project.images" />
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
import UIContainer from "@/components/UI/UIContainer.vue";
import ProjectImages from "@/components/ProjectImages.vue";

import { projects, workExp } from "@/utils/useProjects.js";
import { fadeInBottom } from "@/utils/animations.js";

const selectedExp = ref(0);
const currentExp = computed(() => workExp[selectedExp.value]);
const project = computed(() => projects[currentExp.value.projects[0]]);

watchEffect(() => {
  console.log(currentExp.value.projects[0]);
});
</script>
