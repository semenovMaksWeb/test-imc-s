import { TypeComponentsApi, TypeComponents } from "./TypeComponents";

export interface GenerationFormModal {
  type: TypeComponentsApi;
  code: string;
  parent: string | null;
  value?: any;
  listdata?: { key: string; value: string }[];
  children: GenerationFormModal[];
  components: TypeComponents;
}
