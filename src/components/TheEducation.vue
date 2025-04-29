<template>
  <section class="mb-80">
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <div class="grid grid-cols-2 justify-between gap-x-12 gap-y-34">
        <div class="shrink grow basis-[16rem]">
          <h2 class="mb-8">Education</h2>
          <p class="mb-12">
            I have worked with a variety of companies, from small startups to
            large corporations. My experience includes front-end development,
            back-end development, and project management.
          </p>
        </div>

        <div class="shrink grow basis-[16rem]">
          <h2>Fanshawe College</h2>
          <h3 class="mb-4">Interactive Media Development</h3>
          <p>
            At Fanshawe College, I learned the skillset necessary to design and
            develop interactive digital experiences. The program focused on web
            development, user experience design, and multimedia production,
            providing me with a strong foundation in both technical and creative
            aspects of interactive media.
          </p>
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import UIContainer from "@/components/UI/UIContainer.vue";
import { fadeInBottom } from "@/utils/animations.js";
</script>
