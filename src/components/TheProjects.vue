<template>
  <div>
    <section v-for="(project, i) in projects" :key="project.title">
      <UIContainer
        v-motion
        :initial="fadeInBottom.initial"
        :visible-once="fadeInBottom.enter"
      >
        <div class="flex flex-wrap items-center gap-12">
          <!-- :class="{ 'flex-row-reverse': i % 2 === 1 }" -->
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
  </div>
</template>

<script setup>
import { reactive } from "vue";

import UIContainer from "@/components/UI/UIContainer.vue";
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
import ProjectImages from "@/components/ProjectImages.vue";

import { fadeInBottom } from "@/utils/animations.js";

const projects = reactive([
  {
    title: "Miramonte Homes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rem et labore voluptates quas soluta nemo magni culpa nobis id. Facere atque quas alias totam, neque magni obcaecati officia libero.",
    images: ["MiramonteMockup.png", "spotifyMockup.png"],
    link: "https://example.com/project1",
  },
  {
    title: "Parrot Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rem et labore voluptates quas soluta nemo magni culpa nobis id. Facere atque quas alias totam, neque magni obcaecati officia libero.",
    images: ["ParrotMockup.png"],
    link: "https://example.com/project2",
    code: "https://example.com/project2",
  },
]);
</script>
