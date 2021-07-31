import { ref, Ref } from "vue";
export type position = number | null;

export type returnFunction = {
  x: Ref<position>;
  y: Ref<position>;
};

export function DragElem(flag: Ref<boolean>): returnFunction {
  const x = ref<position>(null);
  const y = ref<position>(null);
  document.addEventListener("mousemove", (e: MouseEvent) => {
    if (flag.value) {
      x.value = e.clientY - 50;
      y.value = e.clientX - 50;
    }
  });
  return {
    x,
    y,
  };
}
