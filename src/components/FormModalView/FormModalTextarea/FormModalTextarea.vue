<template>
  <textarea class="form-modal__textarea" v-model="getInput" rows="20" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FormModalTextarea } from "@/components/FormModalView/FormModalTextarea/FormModalTextarea.ts";

export default defineComponent({
  name: "FormModalTextarea",
  setup() {
    return {
      ...FormModalTextarea(),
    };
  },
});
</script>

<style lang="scss">
@import "FormModalTextarea";
</style>
