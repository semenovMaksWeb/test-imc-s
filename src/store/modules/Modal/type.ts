import { ActionContext } from "vuex";
import { state } from "./state";

export interface typeStore {
  [StateTypeModal.MODAL_FORM_GET]: boolean;
}

export enum StateTypeModal {
  MODAL_FORM_GET = "modal_form_get",
}

export type State = typeof state;

export type Mutations<S = State> = {
  MODAL_VISIBLE(
    state: S,
    payload: { type: StateTypeModal; value: boolean }
  ): void;
};

export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Actions {}

export type Getters = {
  [StateTypeModal.MODAL_FORM_GET](state: State): boolean;
};
