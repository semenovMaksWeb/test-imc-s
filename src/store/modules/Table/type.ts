import { ActionContext } from "vuex";
import { state } from "./state";

export interface TableCol {
  id: number;
  text: string;
}
export interface Table {
  id: number;
  children: TableCol[];
}

export interface typeStore {
  table: Table[] | [];
}

export type State = typeof state;

export type Mutations<S = State> = {
  SET_TABLE(state: S, payload: Table[]): void;
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
  GET_TABLE(state: State): Table[];
};
