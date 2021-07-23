import { useStore } from "@/use/useStore";
import { computed, ComputedRef } from "vue";

type returnFunction = {
  getInput: ComputedRef<string>;
};

export const FormModalTextarea = (): returnFunction => {
  const store = useStore();
  const getInput = computed({
    get: () => store.getters.GET_MODAL_FORM_TO_STRING,
    set: (val: string) => store.commit("SET_MODAL_FORM_STRING", val),
  });
  return {
    getInput,
  };
};
