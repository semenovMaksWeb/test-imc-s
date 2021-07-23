import { useStore } from "@/use/useStore";
import { StateTypeModal } from "@/store/modules/Modal/type";
import { computed, ComputedRef } from "vue";
import { TypeModalForm } from "@/store/modules/GenerationFormModal/type";

type returnFunction = {
  close: () => void;
  getModal: ComputedRef<boolean>;
  jsonForm: ComputedRef<TypeModalForm>;
};

export function FormModal(): returnFunction {
  const store = useStore();
  const close = () => {
    store.commit("MODAL_VISIBLE", {
      type: StateTypeModal.MODAL_FORM_GET,
      value: false,
    });
  };
  const jsonForm = computed(() => store.getters.GET_MODAL_FORM);
  const getModal = computed(() => store.getters[StateTypeModal.MODAL_FORM_GET]);

  return {
    close,
    getModal,
    jsonForm,
  };
}
