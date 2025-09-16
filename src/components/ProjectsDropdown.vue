<template>
  <div>
    <li
      class="dropdown dropdown-start hover:bg-gb-lt-purple transition-background duration-300 cursor-pointer"
      :class="{
        'hidden sm:block w-auto px-0':
          isNav,
      }"
    >
      <div tabindex="0" role="button" class="px-4 py-2">{{ buttonLabel }}</div>
      <ul
        tabindex="0"
        class="menu text-sm dropdown-content bg-gb-dk-purple w-48"
      >
        <li v-for="cat in categories" :key="cat.label">
          <details>
            <summary>{{ cat.label }}</summary>
            <ul>
              <li v-for="project in cat.projects" :key="project.title">
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
          className="collapse-title px-12 py-2 w-full hover:bg-gb-lt-purple transition-background duration-300"
        >
          {{ cat.label }}
        </div>
        <div class="collapse-content w-full">
          <div
            v-for="project in cat.projects"
            :key="project.title"
            class="w-full px-8 text-base hover:bg-gb-lt-purple transition-background duration-300"
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
  buttonLabel: { type: String, default: "Projects" }
});

// make opener for each cat i guess fuck

const showInner = (cat) => {
  // logic to show inner projects
  console.log(cat);
};

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
