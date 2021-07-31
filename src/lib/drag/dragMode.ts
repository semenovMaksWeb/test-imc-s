import { Ref, ref } from "vue";

export type returnFunction = {
  dragMode: Ref<boolean>;
  mousedown: () => void;
  mouseup: () => void;
};

export function DragMode(): returnFunction {
  const dragMode = ref<boolean>(false);
  const mousedown = () => {
    dragMode.value = true;
  };
  const mouseup = () => {
    dragMode.value = false;
  };
  return {
    dragMode,
    mousedown,
    mouseup,
  };
}
