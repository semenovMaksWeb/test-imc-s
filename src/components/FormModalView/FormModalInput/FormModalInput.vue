<template>
  <input
    class="form-modal__input"
    :placeholder="elem.code"
    :type="type"
    :value="elem.value"
    @input="OnInput($event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PropsElem } from "@/lib/PropsElem";
import { FormModalInput } from "@/components/FormModalView/FormModalInput/FormModalInput.ts";

export default defineComponent({
  name: "FormModalInput",
  mixins: [PropsElem],
  props: {
    type: {
      type: String,
      default: "text",
    },
  },
  setup(props) {
    return {
      ...FormModalInput(props),
    };
  },
});
</script>

<style lang="scss">
@import "FormModalInput";
</style>
