import { useStore } from "@/use/useStore";
import { StateTypeModal } from "@/store/modules/Modal/type";
import { computed, ComputedRef, ref, Ref } from "vue";
import { TypeModalForm } from "@/store/modules/GenerationFormModal/type";

type returnFunction = {
  close: () => void;
  getModal: ComputedRef<boolean>;
  jsonForm: ComputedRef<TypeModalForm>;
  x: Ref<position>;
  y: Ref<position>;
  mousedown: (e: Event) => void;
};
type position = number | null;

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

  const x = ref<position>(41);
  const y = ref<position>(1);
  const mousedown = (e: Event) => {
    console.log(e);
  };
  return {
    close,
    getModal,
    jsonForm,
    x,
    y,
    mousedown,
  };
}
