import "@/styles/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router";

import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import { MotionPlugin } from "@vueuse/motion";

Amplify.configure(outputs);

createApp(App).use(router).use(MotionPlugin).mount("#app");
