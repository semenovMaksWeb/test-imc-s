import { GenerationFormModal } from "@/interface/GenerationFormModal";
import { ActionContext } from "vuex";
import { state } from "./state";

export type TypeModalForm = GenerationFormModal[] | [];

export interface typeStore {
  modal_form: TypeModalForm;
  modal_form_string: string;
}

export type State = typeof state;

export type Mutations<S = State> = {
  SET_MODAL_FORM(state: S, payload: TypeModalForm): void;

  SET_MODAL_FORM_STRING(state: S, payload: string): void;

  SET_MODAL_VALUE(
    state: S,
    payload: { data: GenerationFormModal; value: any }
  ): void;
};

export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Actions {
  SET_MODAL_FORM(
    { commit }: AugmentedActionContext,
    payload: TypeModalForm
  ): void;
}

export type Getters = {
  GET_MODAL_FORM_TO_STRING(state: State): string;
  GET_MODAL_FORM(state: State): TypeModalForm;
};
