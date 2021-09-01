import * as generation_form_modal from "@/store/modules/GenerationFormModal/index";
import * as modal from "@/store/modules/Modal/index";
import * as table from "@/store/modules/Table/index";
import * as index from "@/store/modules/Index/index";
import { Module, ModuleTree } from "vuex";

export type State = generation_form_modal.StateAll &
  modal.StateAll &
  table.StateAll &
  index.StateAll;

export type Mutations = generation_form_modal.MutationsAll &
  modal.MutationsAll &
  table.MutationsAll &
  index.MutationsAll;

export type Actions = generation_form_modal.ActionsAll &
  modal.ActionsAll &
  table.ActionsAll &
  index.ActionsAll;

export type Getters = generation_form_modal.GettersAll &
  modal.GettersAll &
  table.GettersAll &
  index.GettersAll;

export const modules: ModuleTree<State> = {
  todo: generation_form_modal.module,
  modal: modal.module,
  table: table.module,
  index: index.module,
};
export const root: Module<State, State> = {
  modules,
};
