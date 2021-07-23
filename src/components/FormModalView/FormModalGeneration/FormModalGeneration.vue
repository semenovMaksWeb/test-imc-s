<template>
  {{ elem.code }}
  <component v-bind:is="elem.components" :elem="elem">
    <template v-if="elem.children && elem.children.length > 0">
      <FormModalGeneration
        :key="elemChildren.code"
        v-for="elemChildren in elem.children"
        :elem="elemChildren"
      />
    </template>
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormModalInput from "@/components/FormModalView/FormModalInput/FormModalInput.vue";
import FormModalInputDate from "@/components/FormModalView/FormModalInputDate/FormModalInputDate.vue";
import FormModalContainer from "@/components/FormModalView/FormModalContainer/FormModalContainer.vue";
import FormModalSelect from "@/components/FormModalView/FormModalSelect/FormModalSelect.vue";
import { PropsElem } from "@/lib/PropsElem";

export default defineComponent({
  mixins: [PropsElem],
  name: "FormModalGeneration",

  components: {
    FormModalContainer,
    FormModalInput,
    FormModalSelect,
    FormModalInputDate,
  },
});
</script>

<style lang="scss"></style>
