import { ActionTree, GetterTree, MutationTree } from "vuex";
import {
  Actions,
  Getters,
  Mutations,
  State,
  TypeModalForm,
  typeStore,
} from "./type";
import { GenerationFormModal } from "@/interface/GenerationFormModal";
import { createTree } from "@/lib/createTree.ts";
import { TypeComponents } from "@/interface/TypeComponents";

export const state: typeStore = {
  modal_form: [],
  modal_form_string: "",
};

export const mutations: MutationTree<State> & Mutations = {
  SET_MODAL_FORM(state: State, payload: TypeModalForm) {
    state.modal_form = createTree(payload, "code", "parent");
  },
  SET_MODAL_FORM_STRING(state: State, payload: string) {
    state.modal_form_string = payload;
  },
  SET_MODAL_VALUE(
    state: State,
    payload: { data: GenerationFormModal; value: any }
  ) {
    payload.data.value = payload.value;
  },
};

export const actions: ActionTree<State, State> & Actions = {
  SET_MODAL_FORM({ commit }, payload: TypeModalForm) {
    for (const e of payload) {
      if (e.type !== "container") {
        e.value = null;
      }
      switch (e.type) {
        case "container":
          e.components = TypeComponents.FormModalContainer;
          e.value = null;
          break;
        case "datepicker":
          e.components = TypeComponents.FormModalInputDate;
          e.value = null;
          break;
        case "input":
          e.components = TypeComponents.FormModalInput;
          break;
        case "list":
          e.components = TypeComponents.FormModalSelect;
          break;
      }
    }
    commit("SET_MODAL_FORM", payload);
  },
};

export const getters: GetterTree<State, State> & Getters = {
  GET_MODAL_FORM_TO_STRING: (state) => {
    return state.modal_form_string;
  },
  GET_MODAL_FORM: (state) => {
    return state.modal_form;
  },
};
