<template>
  <Modal
    @mousemove="mousedown"
    :classModal="'form-modal'"
    :close="close"
    v-if="getModal"
    :style="{ '--form_modal_top': x + 'px', '--form_modal_left': y + 'px' }"
  >
    <template #body>
      <FormModalGeneration
        v-for="elem in jsonForm"
        :elem="elem"
        :key="elem.code"
      />
    </template>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../../Base/Modal/Modal.vue";
import { FormModal } from "@/components/FormModalView/FormModal/FormModal";
import FormModalGeneration from "@/components/FormModalView/FormModalGeneration/FormModalGeneration.vue";
export default defineComponent({
  name: "FormModal",
  components: { FormModalGeneration, Modal },
  setup() {
    return { ...FormModal() };
  },
});
</script>

<style lang="scss">
@import "FormModal";
</style>
