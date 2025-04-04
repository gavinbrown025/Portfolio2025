<template>
  <a
    class="aspect-square h-12"
    href="/"
  >
    <svg class="h-full" viewBox="0 0 96.92 96.91">
      <path
        ref="pathRef"
        class="fill-none stroke-white stroke-[3px]"
        d="M48,47.9,61.45,34.47a19,19,0,0,1,26.89,0l.1.09a19,19,0,0,1,0,26.87l-.08.08a19,19,0,0,1-26.92,0l-26.91-27a19,19,0,0,1,0-26.85l0,0a19,19,0,0,1,26.89,0h0a19,19,0,0,1,0,26.87l-27,27a19,19,0,0,1-26.9,0l-.05,0a19,19,0,0,1,.05-26.91l.07-.08a19,19,0,0,1,26.88.08l27,27.09a19,19,0,0,1,0,26.84l0,0a19,19,0,0,1-26.9,0"
      />
    </svg>
  </a>
</template>

<script setup>
import { ref, computed } from 'vue'

const pathRef = ref(null)

const pathLength = computed(() => {
  const path = pathRef.value
  if (path) {
    console.log(path.getTotalLength())
    return path.getTotalLength()
  }
})

</script>

<style scoped>
@keyframes draw {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

svg path {
  stroke-miterlimit: 10;
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  animation: draw 2.5s ease-in-out 1s forwards;
}
</style>
