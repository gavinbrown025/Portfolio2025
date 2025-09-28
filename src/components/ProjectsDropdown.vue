<template>
  <div>
    <li
      class="dropdown dropdown-end sm:dropdown-start sm:text-base hover:bg-secondary/20 transition-background duration-300 cursor-pointer"
      :class="{
        'hidden sm:block w-auto px-0': isNav,
      }"
    >
      <div tabindex="0" role="button">
        <template v-if="$slots.default">
          <slot></slot>
        </template>
        <template v-else>
          <div class="block px-4 py-2">
            {{ buttonLabel }}
          </div>
        </template>
      </div>
      <ul tabindex="0" class="menu dropdown-content text-sm bg-base-100 w-48">
        <li v-for="cat in categories" :key="cat.label">
          <details>
            <summary>{{ cat.label }}</summary>
            <ul>
              <li
                v-for="project in cat.projects"
                :key="project.title"
                @click="
                  (e) => {
                    e.target.blur();
                    emit('close');
                  }
                "
                @keydown.enter="emit('close')"
              >
                <RouterLink
                  :to="`/showcase/${project.title}`"
                  class="block px-4 py-2"
                >
                  {{ project.title }}
                </RouterLink>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </li>
    <div v-if="isNav" class="sm:hidden">
      <li
        v-for="cat in categories"
        :key="cat.label"
        tabIndex="0"
        className="collapse rounded-none text-lg"
      >
        <div
          className="collapse-title px-12 py-2 w-full hover:bg-secondary/20 transition-background duration-300"
        >
          {{ cat.label }}
        </div>
        <div class="collapse-content w-full">
          <div
            v-for="project in cat.projects"
            :key="project.title"
            class="w-full px-8 text-base hover:bg-secondary/20 transition-background duration-300"
            @click="emit('close')"
            @keydown.enter="emit('close')"
          >
            <RouterLink
              :to="`/showcase/${project.title}`"
              class="block px-4 py-2"
            >
              {{ project.title }}
            </RouterLink>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script setup>
import { projects } from "@/utils/useProjects.js";
import { RouterLink } from "vue-router";
import UIButtonAnim from "./UI/UIButtonAnim.vue";

const props = defineProps({
  isNav: { type: Boolean, default: false },
  buttonLabel: { type: String, default: "Projects" },
});

// Emit a close event when a project is selected (for mobile nav)
const emit = defineEmits(["close"]);

const categories = [
  {
    label: "Work Experience",
    projects: Object.values(projects).filter((p) => p.category === "workExp"),
  },
  {
    label: "Development Experience",
    projects: Object.values(projects).filter((p) => p.category === "devExp"),
  },
];
</script>
