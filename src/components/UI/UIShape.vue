<template>
  <div class="h-full w-full">
    <div class="shape absolute" :style="styleObject"></div>
    <!-- <Logo class="h-40 w-40 object-contain" /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

// Using plain refs for parameters
const radii = {
  top: ref(50),
  right: ref(50),
  bottom: ref(50),
  left: ref(50),
  width: ref(100),
  height: ref(100),
};

// Deltas and config
const dx = {
  top: [],
  right: [],
  bottom: [],
  left: [],
  width: [],
  height: [],
};

const calcParams = {
  top: { rdm: 5, mid: 50 },
  right: { rdm: 5, mid: 50 },
  bottom: { rdm: 5, mid: 50 },
  left: { rdm: 5, mid: 50 },
  width: { rdm: 2.5, mid: 100 },
  height: { rdm: 2.5, mid: 100 },
};

const random = (x) => 2 * x * (0.5 - Math.random());
const average = (x) => x.reduce((a, b) => a + b) / x.length;

// Style object to bind
const styleObject = ref({});

function smoothChange(key) {
  const r = radii[key];
  const d = dx[key];
  const { rdm, mid } = calcParams[key];

  if (d.length > 40) d.shift();
  d.push(random(rdm) + (mid - r.value) / mid);
  r.value += average(d);
}

// Update loop
function update() {
  Object.keys(radii).forEach((key) => smoothChange(key));
  const { top, right, bottom, left, width, height } = radii;
  styleObject.value = {
    width: `${width.value}%`,
    height: `${height.value}%`,
    borderRadius: `${top.value}% ${100 - top.value}% ${100 - bottom.value}% ${
      bottom.value
    }% / ${left.value}% ${right.value}% ${100 - right.value}% ${
      100 - left.value
    }%`,
  };
}

setInterval(update, 60);
</script>

<style scoped>
.shape {
  min-width: 320px;
  background: radial-gradient(circle, #515170 0%, #1c1c32 75%, #00000000 92%);
  will-change: width, height, border-radius;
  /* transition removed for better performance */
}
</style>
