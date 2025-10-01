<template>
  <section >
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
      class="max-w-6xl grid min-h-min items-center"
    >
      <div class="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-x-12">
        <UIHeadingAnim class="col-span-full">About me</UIHeadingAnim>
        <div class="mb-12 md:mb-0 space-y-4">
          <p>
            Hi, I’m a <span class="text-accent">Front-end Developer</span> based
            in Melbourne. I’ve always enjoyed puzzles and building things, so
            when I discovered programming it felt natural—like creating puzzles
            people could interact with.
          </p>
          <p>
            I started my career at a start-up before moving to an advertising
            agency, where I built in-house tools for
            <span class="text-accent">Google Ads</span>. Most recently, I spent
            three years developing the front end of a
            <span class="text-accent">SaaS platform</span> from the ground up,
            creating dashboards that integrated with Google Ads APIs.
          </p>
          <p>
            These days my focus is on building
            <span class="text-accent">intuitive interfaces</span> that work the
            way people expect them to, while collaborating closely with
            designers, back-end developers, and product teams.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div class="font-mono flex gap-8 p-4">
            <ul v-for="(item, i) in skillLists" :key="i">
              <li v-for="value in item" class="flex items-center gap-2">
                <div class="w-2 h-[1px] bg-accent"></div>
                <span>{{ value }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mx-auto p-4 sm:p-0 relative max-w-96 aspect-square">
          <div
            class="absolute -z-10 inset-8 sm:inset-4 w-[calc(100%-2rem)] sm:w-full aspect-square min-w-[284px] rounded-lg border-4 border-accent"
          ></div>
          <UIOverlaySlide dir="right" />
          <img
            :src="ProfilePic"
            alt="Gavin Brown"
            class="min-w-[284px] rounded-lg border-4 mr-4 border-accent"
          />
        </div>
      </div>
    </UIContainer>
  </section>
</template>

<script setup>
import UIContainer from "@/components/UI/UIContainer.vue";
import UIHeadingAnim from "@/components/UI/UIHeadingAnim.vue";
import { fadeInBottom } from "@/utils/animations.js";
import ProfilePic from "@/assets/images/headshot.png";
import UIOverlaySlide from "./UI/UIOverlaySlide.vue";

const skillLists = [
  ["React & Next.js", "Vue & Vite", "TypeScript"],
  ["Node.js", "WordPress", "Django"],
];
</script>

<style scoped>
ul > * {
  white-space: nowrap;
}
</style>
