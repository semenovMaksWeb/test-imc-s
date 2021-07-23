<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Container",
  components: {},
});
</script>

<style lang="scss">
@import "Container";
</style>
