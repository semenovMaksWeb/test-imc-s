import { useStore } from "@/use/useStore";

type returnFunction = {
  OnInput(val: any): void;
};
export function FormModalInput(props: any): returnFunction {
  const store = useStore();
  const OnInput = (val: any) => {
    console.log(val);
    store.commit("SET_MODAL_VALUE", { data: props.elem, value: val });
  };
  return {
    OnInput,
  };
}
