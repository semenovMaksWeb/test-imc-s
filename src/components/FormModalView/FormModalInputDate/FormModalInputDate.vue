<template>
  <FormModalInput :elem="elem" type="date" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PropsElem } from "@/lib/PropsElem";
import FormModalInput from "@/components/FormModalView/FormModalInput/FormModalInput.vue";

export default defineComponent({
  name: "FormModalInputDate",
  components: { FormModalInput },
  mixins: [PropsElem],
});
</script>

<style lang="scss"></style>
