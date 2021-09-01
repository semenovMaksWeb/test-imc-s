import { ActionTree, GetterTree, MutationTree } from "vuex";
import { Actions, Getters, Mutations, State, Table, typeStore } from "./type";

export const state: typeStore = {
  table: [],
};

export const mutations: MutationTree<State> & Mutations = {
  SET_TABLE(state: State, payload) {
    state.table = payload;
  },
};

export const actions: ActionTree<State, State> & Actions = {};

export const getters: GetterTree<State, State> & Getters = {
  GET_TABLE(state: State): Table[] {
    return state.table;
  },
};
