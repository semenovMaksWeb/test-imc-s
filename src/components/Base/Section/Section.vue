<template>
  <section class="section">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Section",
  components: {},
});
</script>

<style lang="scss">
@import "Section";
</style>
