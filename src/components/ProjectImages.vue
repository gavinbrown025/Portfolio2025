<template>
  <div
    class="sm:min-w-[28rem] aspect-3/2 grow grid grid-cols-[auto_1fr_auto] place-items-center"
  >
    <div
      class="grid place-items-center cursor-pointer h-full hover:bg-primary/20 rotate-180"
      @click="prevImage"
    >
      <UIIcon
        v-if="projectMedia.length > 1"
        icon="arrow_forward_ios"
        class=""
      />
    </div>

    <div
      :style="transitionStyle"
      class="relative size-full overflow-hidden border-border-gb-lt-grey/0"
      :class="{
        'mockup-window h-auto bg-base-100 border-2 border-accent/100 transition-all duration-200':
          videoActive,
      }"
    >
      <Transition
        name="slide"
        mode="out-in"
        @after-enter="onBeforeEnter"
        @before-leave="videoActive = false"
      >
        <component
          :key="currentIndex"
          :is="currentMedia.type"
          :src="currentMedia.src"
          :controls="currentMedia.type === 'video'"
          alt="Project image"
          class="size-full object-contain pointer-events-auto"
        />
      </Transition>
    </div>

    <div
      class="grid place-items-center cursor-pointer h-full hover:bg-primary/20"
      @click="nextImage"
    >
      <UIIcon
        v-if="projectMedia.length > 1"
        icon="arrow_forward_ios"
        class=""
      />
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

const videoActive = ref(false);
function onBeforeEnter() {
  videoActive.value = currentMedia.value.type === "video";
}

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
