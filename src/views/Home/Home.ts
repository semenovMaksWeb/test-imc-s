import { computed, ComputedRef } from "vue";
import { useStore } from "@/use/useStore";
import { Table } from "@/store/modules/Table/type";

export type HomeResult = {
  getTable: ComputedRef<Table[]>;
};

export function Home(): HomeResult {
  const store = useStore();
  store.commit("SET_TABLE", [
    {
      id: 1,
      children: [
        { id: 1, text: "1.1" },
        { id: 2, text: "1.2" },
        { id: 3, text: "1.3" },
        { id: 4, text: "1.4" },
        { id: 5, text: "1.5" },
      ],
    },
    {
      id: 2,
      children: [
        { id: 1, text: "2.1" },
        { id: 2, text: "2.2" },
        { id: 3, text: "2.3" },
        { id: 4, text: "2.4" },
        { id: 5, text: "2.5" },
      ],
    },
    {
      id: 3,
      children: [
        { id: 1, text: "3.1" },
        { id: 2, text: "3.2" },
        { id: 3, text: "3.3" },
        { id: 4, text: "3.4" },
        { id: 5, text: "3.5" },
      ],
    },
  ]);
  const getTable = computed(() => {
    return store.getters.GET_TABLE;
  });
  return {
    getTable,
  };
}
