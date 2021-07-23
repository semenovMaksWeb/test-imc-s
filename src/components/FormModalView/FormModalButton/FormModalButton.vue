<template>
  <button class="form-modal__button" @click="generationForm">
    Сгенерировать форму
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FormModalButton } from "@/components/FormModalView/FormModalButton/FormModalButton.ts";

export default defineComponent({
  name: "FormModalButton",
  setup() {
    return {
      ...FormModalButton(),
    };
  },
});
</script>

<style lang="scss">
@import "FormModalButton";
</style>
