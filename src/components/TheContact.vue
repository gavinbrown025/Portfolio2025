<template>
  <section class="bg-base-100">
    <UIContainer
      v-motion
      :initial="fadeInBottom.initial"
      :visible-once="fadeInBottom.enter"
      class="grid md:grid-cols-[5fr_7fr] items-center gap-8"
    >
      <UIHeadingAnim class="not-sm:ml-6 col-span-full mb-12">
        What can I do for you?
      </UIHeadingAnim>
      <form
        @submit.prevent="sendMail"
        id="contact-form"
        method="post"
        class="space-y-8 max-w-[36rem] not-sm:px-6"
      >
        <div v-for="{ name, type, label } in inputs" :key="name">
          <UIInput
            v-model="formData[name]"
            :label="label"
            :type="type"
            :name="name"
            required
          />
        </div>
        <div class="mt-12 grid grid-cols-2 gap-4 items-center">
          <UIButtonAnim type="submit">Send</UIButtonAnim>
          <UIButtonAnim type="button" icon="open_in_new" href="mailto:gavinbrown025@gmail.com">
            Email
          </UIButtonAnim>
          <p class="col-span-full">
            {{ formMessage }}
          </p>
        </div>
      </form>
      <SceneAnimCon />
    </UIContainer>
  </section>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { reactive, ref } from "vue";

import UIContainer from "@/components/UI/UIContainer.vue";
import UIInput from "@/components/UI/UIInput.vue";
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";
import UIIcon from "@/components/UI/UIIcon.vue";
import { fadeInBottom } from "@/utils/animations.js";

import SceneAnimCon from "@/components/SceneAnimCon.vue";
import UIHeadingAnim from "@/components/UI/UIHeadingAnim.vue";

const inputs = [
  { name: "name", type: "text", label: "Your Name" },
  { name: "email", type: "email", label: "Email" },
  { name: "message", type: "textarea", label: "Message" },
];

const formData = reactive({ name: "", email: "", message: "" });

const formMessage = ref("");
const formError = ref(false);
const emailInvalid = ref(false);

const sendMail = async (e) => {
  const mailProps = [
    "service_56hby5m",
    "template_y6h7do2",
    e.target,
    "user_dndU3EyPpAw3SMgd88loo",
  ];
  try {
    emailjs.init("user_dndU3EyPpAw3SMgd88loo");
    const sendRes = await emailjs.sendForm(...mailProps);
    console.log(sendRes);
    formMessage.value =
      "Thanks for your message! You will hear back from me soon.";
  } catch (error) {
    console.log("FAILED...", error);
    formError.value = true;
  }
};
</script>
