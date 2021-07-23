import { ActionTree, GetterTree, MutationTree } from "vuex";
import {
  Actions,
  Getters,
  Mutations,
  State,
  StateTypeModal,
  typeStore,
} from "./type";

export const state: typeStore = {
  modal_form_get: false,
};

export const mutations: MutationTree<State> & Mutations = {
  MODAL_VISIBLE(state: State, payload) {
    state[payload.type] = payload.value;
  },
};

export const actions: ActionTree<State, State> & Actions = {};

export const getters: GetterTree<State, State> & Getters = {
  [StateTypeModal.MODAL_FORM_GET](state: State): boolean {
    return state.modal_form_get;
  },
};
