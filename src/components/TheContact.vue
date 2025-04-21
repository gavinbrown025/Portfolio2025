<template>
  <section class="flex flex-wrap">
    <UIContainer class="sm:basis-1/2">
      <form
        @submit.prevent="sendMail"
        id="contact-form"
        method="post"
        class="space-y-8"
      >
        <h2>What can I do for you?</h2>
        <div v-for="{ name, type, label } in inputs" :key="name">
          <UIInput
            v-model="formData[name]"
            :label="label"
            :type="type"
            :name="name"
            required
          />
        </div>
        <div class="mt-12 flex gap-12 items-center">
          <UIButtonAnim type="submit">Send</UIButtonAnim>
          <p>{{ formMessage }}</p>
        </div>
      </form>
    </UIContainer>
    <div class="sm:basis-1/2"></div>
  </section>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { reactive, ref } from "vue";

import UIContainer from "@/components/UI/UIContainer.vue";
import UIInput from "@/components/UI/UIInput.vue";
import UIButtonAnim from "@/components/UI/UIButtonAnim.vue";

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
    "service_qpr4sif",
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
