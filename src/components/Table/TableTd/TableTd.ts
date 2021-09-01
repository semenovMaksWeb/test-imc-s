import { useStore } from "@/use/useStore";
import { computed, ComputedRef, ref } from "vue";
import { ItableFocus } from "@/store/modules/Index/type";

export type TableTdResult = {
  focusTd(): void;
  blurTd(): void;
  keyupTd(e: any): void;
  isClassFocus: ComputedRef<boolean>;
};
export function TableTd(props: any): TableTdResult {
  const store = useStore();

  const focusOf = ref<boolean>(true);
  const isClassFocus = computed(() => {
    return (
      store.getters.GET_TABLE_FOCUS &&
      store.getters.GET_TABLE_FOCUS[0] === props.indexRow &&
      store.getters.GET_TABLE_FOCUS[1] === props.indexCol &&
      focusOf.value === false
    );
  });

  const focusTd = () => {
    focusOf.value = false;
    store.commit("SET_TABLE_FOCUS", [props.indexRow, props.indexCol]);
    console.log(store.getters.GET_TABLE_FOCUS);
  };
  const blurTd = () => {
    focusOf.value = true;
  };
  const keyupTd = (e: any) => {
    if (e.key === "ArrowUp") {
      ArrowUp();
    }
    console.log(e);
  };
  const ArrowUp = () => {
    if (props.indexRow > 0) {
      const newsValue: ItableFocus = [props.indexRow - 1, props.indexCol];
      store.commit("SET_TABLE_FOCUS", newsValue);
      console.log(store.getters.GET_TABLE_FOCUS);
    }
  };

  return {
    focusTd,
    blurTd,
    isClassFocus,
    keyupTd,
  };
}
