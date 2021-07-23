import { defineComponent, PropType } from "vue";

import { GenerationFormModal } from "@/interface/GenerationFormModal";

export const PropsElem = defineComponent({
  props: {
    elem: {
      type: Object as PropType<GenerationFormModal>,
    },
  },
});
