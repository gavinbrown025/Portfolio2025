import { createRouter, createWebHistory } from "vue-router";
import { scrollBehavior } from "@/utils/useScrollTo";

import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior,
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/showcase/:name",
      name: "showcase",
      component: () => import("../views/ProjectView.vue"),
    },
  ],
});

export default router;
