import * as generation_form_modal from "@/store/modules/GenerationFormModal/index";
import * as modal from "@/store/modules/Modal/index";
import { Module, ModuleTree } from "vuex";

export type State = generation_form_modal.StateAll & modal.StateAll;

export type Mutations = generation_form_modal.MutationsAll & modal.MutationsAll;

export type Actions = generation_form_modal.ActionsAll & modal.ActionsAll;

export type Getters = generation_form_modal.GettersAll & modal.GettersAll;

export const modules: ModuleTree<State> = {
  todo: generation_form_modal.module,
  modal: modal.module,
};
export const root: Module<State, State> = {
  modules,
};
