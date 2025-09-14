<template>
  <div class="basis-1/2 grow grid grid-cols-[auto_1fr_auto] place-items-center sm:min-w-[36rem] sm:py-8">
    <div
      v-if="projectMedia.length > 1"
      class="h-full grid place-items-center cursor-pointer p-1 hover:bg-gb-lt-purple/20"
      @click="prevImage"
    >
      <UIIcon icon="arrow_back_ios" class="-mr-2" />
    </div>

    <div
      class="relative w-full h-80 sm:h-100 overflow-hidden grid place-items-center"
      :style="transitionStyle"
    >
      <Transition name="slide" mode="out-in" class="w-full h-full grid place-items-center">
        <div :key="currentIndex" class="relative w-full h-full aspect-video overflow-hidden">
          <component
            :is="currentMedia.type"
            :src="currentMedia.src"
            alt="Project Content"
            :controls="currentMedia.type === 'video'"
            class="absolute top-0 left-0 w-full h-full object-contain pointer-events-auto"
            v-bind="currentMedia.type === 'video' ? { playsinline: true, webkitPlaysinline: true } : {}"
          />
        </div>
      </Transition>
    </div>

    <div
      v-if="projectMedia.length > 1"
      class="h-full grid place-items-center cursor-pointer p-1 hover:bg-gb-lt-purple/20"
      @click="nextImage"
    >
      <UIIcon icon="arrow_forward_ios" class="-mr-2" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProjectImages, useProjectVideos } from "@/utils/useProjectImages";
import UIIcon from "@/components/UI/UIIcon.vue";

const props = defineProps({
  images: { type: Array, required: true },
  videos: { type: Array, default: () => [] },
});

const currentIndex = ref(0);

const imageMap = useProjectImages();
const videoMap = useProjectVideos();

const projectMedia = computed(() => {
  const imgArr = Array.isArray(props.images)
    ? props.images.map((image) => ({ type: "img", src: imageMap[image] }))
    : [];
  const vidArr = Array.isArray(props.videos)
    ? props.videos.map((video) => ({ type: "video", src: videoMap[video] }))
    : [];
  return [...imgArr, ...vidArr];
});

const currentMedia = computed(
  () => projectMedia.value[currentIndex.value] || {}
);

const direction = ref("next");
const transitionStyle = computed(() => ({
  "--slide-from": direction.value === "next" ? "100%" : "-100%",
  "--slide-to": direction.value === "next" ? "-100%" : "100%",
}));

function nextImage() {
  direction.value = "next";
  currentIndex.value = (currentIndex.value + 1) % projectMedia.value.length;
}

function prevImage() {
  direction.value = "prev";
  currentIndex.value =
    (currentIndex.value - 1 + projectMedia.value.length) %
    projectMedia.value.length;
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
