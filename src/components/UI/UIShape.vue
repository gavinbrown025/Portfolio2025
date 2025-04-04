<template>
  <div class="h-full w-full">
    <div class="shape absolute" :style="style"></div>
    <!-- <Logo class="h-40 w-40 object-contain" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
// import Logo from '@/components/UI/UILogo.vue'
const radii = {
  top: ref(50),
  right: ref(50),
  bottom: ref(50),
  left: ref(50),
  width: ref(100),
  height: ref(100),
}

const dx = {
  top: ref([]),
  right: ref([]),
  bottom: ref([]),
  left: ref([]),
  width: ref([]),
  height: ref([]),
}
const calcParams = {
  top: { rdm: 5, mid: 50 },
  right: { rdm: 5, mid: 50 },
  bottom: { rdm: 5, mid: 50 },
  left: { rdm: 5, mid: 50 },
  width: { rdm: 2.5, mid: 100 },
  height: { rdm: 2.5, mid: 100 },
}

const style = computed(() => {
  const { top, right, bottom, left, width, height } = radii
  return {
    width: `${width.value}%`,
    height: `${height.value}%`,
    borderRadius: `${top.value}% ${100 - top.value}% ${100 - bottom.value}% ${
      bottom.value
    }% / ${left.value}% ${right.value}% ${100 - right.value}% ${
      100 - left.value
    }%`,
  }
})

const random = (x) => 2 * x * (0.5 - Math.random())
const average = (x) => x.reduce((a, b) => a + b) / x.length

const smoothChange = (key) => {
  const d = dx[key]
  const r = radii[key]
  const { rdm, mid } = calcParams[key]

  if (d.value.length > 40) d.value.shift()
  d.value.push(random(rdm) + (mid - r.value) / mid)
  r.value += average(d.value)
}

setInterval(() => Object.keys(radii).forEach((key) => smoothChange(key)), 50)
</script>

<style lang="scss" scoped>
.shape {
  z-index: -1;
  min-width: 320px;
  transition:
    width 100ms,
    height 100ms,
    border-radius 400ms;
  transition-timing-function: ease;
  background-image: radial-gradient(
    circle,
    rgba(#aaaad4, 0.4),
    rgba(#1a1a30, 0.5) 80%
  );
  animation: spin 60s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>
