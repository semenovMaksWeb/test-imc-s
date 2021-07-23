import { useStore } from "@/use/useStore";
import { computed, ComputedRef } from "vue";

type returnFunction = {
  getResult: ComputedRef<string>;
  getElement: ComputedRef<boolean>;
};

export const FormModalResult = (): returnFunction => {
  const store = useStore();
  const getResult = computed(() =>
    JSON.stringify(store.getters.GET_MODAL_FORM, null, 5)
  );
  const getElement = computed(() => store.getters["modal_form_get"]);
  return {
    getResult,
    getElement,
  };
};
