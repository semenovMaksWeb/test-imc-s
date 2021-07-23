<template>
  <div class="form-modal__container">
    <slot />
  </div>
</template>

<script lang="ts">
import { PropsElem } from "@/lib/PropsElem";

export default {
  mixins: [PropsElem],
  name: "FormModalContainer",
};
</script>

<style lang="scss">
@import "FormModalContainer";
</style>
