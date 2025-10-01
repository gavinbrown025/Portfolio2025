<template>
  <div class="relative grid grid-cols-1 grid-rows-1 overflow-hidden">
    <div ref="sunPath" class="absolute inset-0 -top-1/12">
      <div class="size-full">
        <div
          class="relative top-1/10 left-3/10 w-1/8 aspect-square rounded-full bg-secondary"
        ></div>
      </div>
      <div class="size-full rotate-180">
        <div
          ref="moonPath"
          class="relative top-1/10 left-3/10 w-1/8 aspect-square mask-[url('/src/assets/masks/moonmask.svg')] bg-secondary"
        ></div>
      </div>
    </div>
    <div class="relative row-start-1 col-start-1">
      <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
        <polygon
          class="fill-base-100"
          vector-effect="non-scaling-stroke"
          points="201.36 106.82 0 106.82 0 77.7 70 59.28 192.49 64.86 201.36 106.82"
        />
      </svg>
    </div>
    <div class="relative row-start-1 col-start-1">
      <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
        <path
          class="fill-base-100 stroke-secondary stroke-2"
          vector-effect="non-scaling-stroke"
          d="M192.35,64.86l-39.91-43.75c-.93-1.02-2.56-.92-3.35.21l-9.56,13.49h0s61.69,67.62,61.69,67.62"
        />
      </svg>
    </div>
    <!-- cloud 1 -->
    <div
      ref="cloudCon1"
      class="absolute top-1/12 -left-2/5 w-2/5 overflow-visible"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 455 140"
        style="overflow: visible"
      >
        <path
          class="fill-base-100 stroke-secondary stroke-2"
          vector-effect="non-scaling-stroke"
          ref="cloudAnim1"
          :d="currentPath1"
        />
      </svg>
    </div>
    <div class="relative row-start-1 col-start-1">
      <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
        <path
          class="fill-base-100 stroke-secondary stroke-2"
          vector-effect="non-scaling-stroke"
          d="M69.85,59.28L108.51,4.7c.79-1.12,2.42-1.22,3.35-.21l27.66,30.32h0s26.52,29.07,26.52,29.07"
        />
      </svg>
    </div>
    <div class="relative row-start-1 col-start-1">
      <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
        <path
          class="fill-base-100 stroke-secondary stroke-2"
          vector-effect="non-scaling-stroke"
          d="M35.13,79.8H3.16c-1.62,0-2.66-1.71-1.91-3.15L24.68,31.55c.72-1.38,2.62-1.57,3.59-.35l58.63,73.16c.9,1.12,2.61,1.07,3.44-.1l49.18-69.43"
        />
      </svg>
    </div>
    <!-- cloud 2 -->
    <div
      ref="cloudCon2"
      class="absolute top-3/10 -left-2/5 w-2/5 overflow-visible"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 455 140"
        style="overflow: visible"
      >
        <path
          class="fill-base-100 stroke-secondary stroke-2"
          vector-effect="non-scaling-stroke"
          ref="cloudAnim2"
          :d="currentPath2"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { cloudAnim } from "@/components/CloudAnim.js";
import { ref, onMounted } from "vue";
import { gsap } from "@/utils/useGSAP.js";

const cloudCon1 = ref(null);
const cloudAnim1 = ref(null);
const currentPath1 = cloudAnim(cloudAnim1, 0);

const cloudCon2 = ref(null);
const cloudAnim2 = ref(null);
const currentPath2 = cloudAnim(cloudAnim2, 2);

const sunPath = ref(null);
const moonPath = ref(null);

const viewBox = "0 -14 192 120.16";

const cloudDrift = (el, dur) => {
  gsap.to(el, { duration: dur, left: "100%", ease: "linear", repeat: -1 });
};
const sunAnimation = () => {
  gsap.fromTo(
    moonPath.value,
    { rotate: 250 },
    { rotate: -110, duration: 45, ease: "linear", repeat: -1 }
  );
  gsap.fromTo(
    sunPath.value,
    { rotate: -60 },
    {
      rotate: 300,
      duration: 45,
      ease: "linear",
      repeat: -1,
      transformOrigin: "50% 100%",
    }
  );
};

onMounted(() => {
  cloudDrift(cloudCon1.value, 30);
  sunAnimation();
  setTimeout(() => {
    cloudDrift(cloudCon2.value, 50);
  }, 9500);
});
</script>
