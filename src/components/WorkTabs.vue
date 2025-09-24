<script setup>
import { selectedWork, workExp } from "@/utils/useProjects.js";
import { computed } from "vue";

// list of companies
const items = computed(() =>
  Object.values(workExp).map((item) => item.company)
);

// index of selected company
const active = computed(() => {
  const index = items.value.indexOf(selectedWork.value);
  return index >= 0 ? index : 0;
});

const select = (company) => (selectedWork.value = company);
</script>

<template>
  <ul class="font-mono mb-1 relative text-sm h-min grid grid-cols-3 sm:block sm:w-40">
    <div
      class="hidden sm:block absolute h-1/3 w-1 bg-accent top-0 transition-all duration-500"
      :class="{
        'top-1/3': active == 1,
        'top-2/3': active == 2,
      }"
    ></div>
    <div
      class="sm:hidden absolute h-1 w-1/3 bg-accent bottom-0 left-0 transition-all duration-500"
      :class="{
        'left-1/3': active == 1,
        'left-2/3': active == 2,
      }"
    ></div>
    <li
      v-for="(item, index) in items"
      :key="item"
      class="text-nowrap w-full p-3 sm:py-4 sm:px-6 cursor-pointer hover:bg-secondary/20 transition-colors duration-500"
      :class="active == index ? 'text-accent bg-secondary/20' : ''"
      @click="select(item)"
    >
      {{ item }}
    </li>
  </ul>
</template>
