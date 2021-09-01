import { ActionTree, GetterTree, MutationTree } from "vuex";
import {
  Actions,
  Getters,
  Mutations,
  State,
  typeStore,
  ItableFocus,
} from "./type";

export const state: typeStore = {
  tableFocus: [0, 0],
};

export const mutations: MutationTree<State> & Mutations = {
  SET_TABLE_FOCUS(state: State, payload) {
    console.log(payload);
    state.tableFocus = payload;
  },
};

export const actions: ActionTree<State, State> & Actions = {};

export const getters: GetterTree<State, State> & Getters = {
  GET_TABLE_FOCUS(state: State): ItableFocus {
    return state.tableFocus;
  },
};
