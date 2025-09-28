import { ref, onMounted, nextTick } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

export const activeView = ref(null);

export function useActiveView() {
  const sectionIds = [
    "profile",
    "experience",
    "projects",
    "education",
    "contact",
  ];

  onMounted(async () => {
    await nextTick();
    const visibilityMap = new Map(); // id -> boolean

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      useIntersectionObserver(
        el,
        ([{ isIntersecting }]) => {
          visibilityMap.set(id, isIntersecting);

          // Find the first section intersecting
          const firstVisible = sectionIds.find((s) => visibilityMap.get(s));
          activeView.value = firstVisible || null;
        },
        {
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0,
        }
      );
    });
  });

  return { activeView };
}
