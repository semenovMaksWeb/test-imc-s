<template>
  <div
    @keyup="keyupTd"
    @click="focusTd"
    @blur="blurTd"
    class="table__td"
    :tabindex="indexRow"
    :class="{ 'table__td-focus': isClassFocus }"
  >
    {{ col.text }}
  </div>
</template>

<script lang="ts">
import { TableTd } from "@/components/Table/TableTd/TableTd";

export default {
  props: {
    col: {},
    indexCol: {
      type: Number,
    },
    indexRow: {
      type: Number,
    },
  },
  setup(props: any) {
    return { ...TableTd(props) };
  },
};
</script>

<style scoped lang="scss">
@import "TableTd";
</style>
