<template>
  <section>
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
    >
      <UIHeadingAnim class="mb-8">Things I've Built</UIHeadingAnim>
     <FeatureProject />
    </UIContainer>
  </section>
</template>

<script setup>
import { fadeInBottom } from "@/utils/animations.js";
import UIContainer from "./UI/UIContainer.vue";
import UIHeadingAnim from "./UI/UIHeadingAnim.vue";
import FeatureProject from "./FeatureProject.vue";

</script>