import { useStore } from "@/use/useStore";
import { StateTypeModal } from "@/store/modules/Modal/type";
import { computed, ComputedRef, ref, Ref } from "vue";
import { TypeModalForm } from "@/store/modules/GenerationFormModal/type";
import {
  returnFunction as returnDragMode,
  DragMode,
} from "@/lib/drag/dragMode";
import {
  returnFunction as returnDragElem,
  DragElem,
} from "@/lib/drag/dragElem";

type returnFunction = {
  close: () => void;
  getModal: ComputedRef<boolean>;
  jsonForm: ComputedRef<TypeModalForm>;
} & returnDragMode &
  returnDragElem;

export function FormModal(): returnFunction {
  const { dragMode, mouseup, mousedown } = DragMode();
  const { x, y } = DragElem(dragMode);
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
    dragMode,
    mousedown,
    mouseup,
    x,
    y,
  };
}
