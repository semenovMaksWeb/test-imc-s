<template>
  <select
    class="form-modal__select"
    :value="elem.value"
    @input="OnInput($event.target.value)"
  >
    <option
      v-for="listdata in elem.listdata"
      :key="listdata.key"
      :value="listdata.value"
    >
      {{ listdata.value }}
    </option>
  </select>
</template>

<script lang="ts">
import { PropsElem } from "@/lib/PropsElem";
import { FormModalInput } from "@/components/FormModalView/FormModalInput/FormModalInput.ts";

export default {
  name: "FormModalSelect",
  mixins: [PropsElem],
  setup(props: any) {
    return {
      ...FormModalInput(props),
    };
  },
};
</script>

<style lang="scss">
@import "FormModalSelect";
</style>
