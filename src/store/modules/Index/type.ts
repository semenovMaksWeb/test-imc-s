import { ActionContext } from "vuex";
import { state } from "./state";

export type ItableFocus = [number, number];

export interface typeStore {
  tableFocus: ItableFocus;
}

export type State = typeof state;

export type Mutations<S = State> = {
  SET_TABLE_FOCUS(state: S, payload: ItableFocus): void;
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
  GET_TABLE_FOCUS(state: State): ItableFocus;
};
