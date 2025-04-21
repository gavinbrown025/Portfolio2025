<template>
  <div class="basis-1/2 grow px-4 py-8">
    <img :src="projectImage" :alt="`Project image`" />
  </div>
</template>

<script setup>
import { useProjectImages } from "@/utils/useProjectImages";
const imageMap = useProjectImages();

const props = defineProps({ images: { type: Array, required: true } });

const projectImage = imageMap[props.images[0]];

</script>
