<template>
  <div class="flex items-center basis-1/2 grow px-4 py-8">
    <UIIcon icon="arrow_back_ios" class="cursor-pointer" @click="nextImage" />
    <div class="w-full contain-content">
      <div
        v-for="(image, i) in props.images"
        :key="image"
        class="w-full h-full"
      >
        <img
          v-if="i === currentIndex"
          v-motion
          :initial="slide.initial"
          :enter="slide.enter"
          :leave="slide.leave"
          :src="projectImages[i]"
          alt="Project Image"
          :class="{ hidden: i !== currentIndex }"
        />
      </div>
    </div>
    <UIIcon
      icon="arrow_forward_ios"
      class="cursor-pointer"
      @click="prevImage"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProjectImages } from "@/utils/useProjectImages";

import UIIcon from "@/components/UI/UIIcon.vue";

const imageMap = useProjectImages();

const props = defineProps({ images: { type: Array, required: true } });

const currentIndex = ref(0);

const projectImages = computed(() =>
  props.images.map((image) => imageMap[image])
);

const direction = ref("next");

const slide = computed(() => ({
  initial: {
    opacity: 0,
    x: direction.value === "next" ? "-100%" : "100%",
  },
  enter: {
    opacity: 1,
    x: "0%",
    transition: { duration: 700, ease: "easeOut" },
  },
  leave: {
    opacity: 0,
    x: direction.value === "next" ? "100%" : "-100%",
    transition: { duration: 700, ease: "easeOut" },
  },
}));

function nextImage() {
  direction.value = "next";
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}

function prevImage() {
  direction.value = "prev";
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
}
</script>
