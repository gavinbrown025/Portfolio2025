<template>
  <div class="min-w-[24rem] flex items-center basis-1/2 grow py-8">
    <UIIcon icon="arrow_back_ios" class="cursor-pointer" @click="prevImage" />

    <div
      class="relative w-full overflow-hidden contain-content h-90"
      :style="transitionStyle"
    >
      <Transition name="slide" mode="out-in">
        <img
          :key="currentIndex"
          :src="currentImage"
          alt="Project image"
          class="absolute top-0 left-0 w-full h-full object-contain"
        />
      </Transition>
    </div>

    <UIIcon
      icon="arrow_forward_ios"
      class="cursor-pointer"
      @click="nextImage"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProjectImages } from "@/utils/useProjectImages";
import UIIcon from "@/components/UI/UIIcon.vue";

const props = defineProps({ images: { type: Array, required: true } });

const currentIndex = ref(0);

const imageMap = useProjectImages();
const projectImages = computed(() =>
  props.images.map((image) => imageMap[image])
);
const currentImage = computed(() => projectImages.value[currentIndex.value]);

const direction = ref("next");
const transitionStyle = computed(() => ({
  "--slide-from": direction.value === "next" ? "100%" : "-100%",
  "--slide-to": direction.value === "next" ? "-100%" : "100%",
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

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  width: 100%;
}

.slide-enter-from {
  transform: translateX(var(--slide-from));
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0%);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(var(--slide-to));
  opacity: 0;
}
</style>
