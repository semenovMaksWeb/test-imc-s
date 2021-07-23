<template>
  <pre class="form-modal__result" v-if="!getElement && getResult.length !== 0">
    {{ getResult }}
  </pre>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FormModalResult } from "@/components/FormModalView/FormModalResult/FormModalResult.ts";

export default defineComponent({
  name: "FormModalResult",
  setup() {
    return {
      ...FormModalResult(),
    };
  },
});
</script>

<style lang="scss">
@import "FormModalResult";
</style>
