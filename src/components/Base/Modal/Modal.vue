<template>
  <teleport to="body">
    <div class="modal_wrapper">
      <div
        class="modal"
        :class="classModal"
        :style="styleModal"
        @mousedown="mousedownModal"
        @mouseup="mouseupModal"
      >
        <div class="modal__header">
          <slot name="header" />
          <slot name="button_close">
            <button class="modal__button_close" @click="close">&#10006;</button>
          </slot>
        </div>
        <div class="modal__body"><slot name="body" /></div>
        <div class="modal__footer"><slot name="footer" /></div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    close: {
      type: Function,
    },
    classModal: {
      type: String,
    },
    mousedownModal: {
      type: Function,
    },
    mouseupModal: {
      type: Function,
    },
    styleModal: {
      type: Object,
    },
  },
});
</script>

<style lang="scss">
@import "Modal";
</style>
