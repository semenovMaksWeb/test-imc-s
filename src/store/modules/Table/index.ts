import { Module } from "vuex";
import { actions, getters, mutations, state } from "./state";
import { Actions, Getters, Mutations, State } from "./type";

export const module: Module<State, State> = {
  state,
  getters,
  mutations,
  actions,
};

export type GettersAll = Getters;
export type ActionsAll = Actions;
export type MutationsAll = Mutations;
export type StateAll = State;
