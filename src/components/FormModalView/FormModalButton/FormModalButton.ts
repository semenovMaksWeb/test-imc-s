import { useStore } from "@/use/useStore";
import { StateTypeModal } from "@/store/modules/Modal/type";

type returnFunction = {
  generationForm: () => void;
};

export function FormModalButton(): returnFunction {
  const store = useStore();

  const generationForm = (): void => {
    if (store.getters.GET_MODAL_FORM_TO_STRING) {
      // создать модалку
      store.dispatch(
        "SET_MODAL_FORM",
        JSON.parse(store.getters.GET_MODAL_FORM_TO_STRING)
      );
      store.commit("MODAL_VISIBLE", {
        type: StateTypeModal.MODAL_FORM_GET,
        value: true,
      });
    }
  };

  return {
    generationForm,
  };
}
