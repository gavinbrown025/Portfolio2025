<template>
  <div class="mb-2 flex flex-col">
    <label :for="name" class="mb-2">{{ label }}</label>
    <component
      :is="inputType"
      v-model="inputValue"
      class="border-l-4 border-b-1 border-white p-2 outline-0 autofill:bg-yellow-200 valid:border-green-300 user-invalid:border-red-300"
      :class="{ filled: inputValue }"
      :type="type"
      :name="name"
      :id="name"
      :required="required"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";

const inputValue = defineModel();

const props = defineProps({
  type: { type: String, default: "text" },
  name: { type: String, default: "" },
  required: { type: Boolean, default: false },
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
});

const inputType = computed(() =>
  props.type === "textarea" ? "textarea" : "input"
);
</script>

<style scoped>
input,
textarea,
label {
  transition: all 300ms ease-out;
}

textarea {
  resize: none;
  height: 8rem;
}
</style>
