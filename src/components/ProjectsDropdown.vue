<template>
  <div>
    <div
      class="dropdown dropdown-end sm:dropdown-start cursor-pointer"
      :class="{ 'not-sm:hidden w-auto px-0': isNav }"
    >
      <div tabindex="0" role="button">
        <slot></slot>
      </div>
      <ul tabindex="0" class="menu dropdown-content text-sm bg-base-100 w-48">
        <li
          @click="
            (e) => {
              e.target.blur();
              emit('close');
            }
          "
          @keydown.enter="emit('close')"
        >
          <RouterLink
            :to="`#projects`"
            class="block py-2"
            :class="{ 'text-accent': isActive }"
          >
            Featured
          </RouterLink>
        </li>
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
    </div>
    <div v-if="isNav" class="sm:hidden">
      <li
        v-for="cat in categories"
        :key="cat.label"
        tabIndex="0"
        className="collapse collapse-arrow [] rounded-none text-lg"
      >
        <div
          className="collapse-title py-2 w-full hover:bg-secondary/20 transition-background duration-300"
        >
          {{ cat.label }}
        </div>
        <div class="collapse-content w-full">
          <div
            v-for="project in cat.projects"
            :key="project.title"
            class="w-full px-2 text-base hover:bg-secondary/20 transition-background duration-300"
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

const props = defineProps({
  isNav: { type: Boolean, default: false },
  buttonLabel: { type: String, default: "Projects" },
});

import { activeView } from "@/utils/useActiveView.js";
import { computed } from "vue";

const isActive = computed(() => activeView.value === "projects");

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

<style scoped>
.collapse-arrow {
  & > .collapse-title::after {
    top: 1.25rem;
  }
}
</style>
