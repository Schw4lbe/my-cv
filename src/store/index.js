import { createStore } from "vuex";

const store = createStore({
  state: {
    elementHidden: localStorage.getItem("elementHidden") === "true" || false,
  },
  mutations: {
    hideElement(state) {
      state.elementHidden = true;
      localStorage.setItem("elementHidden", "true");
    },
    showElement(state) {
      state.elementHidden = false;
      localStorage.setItem("elementHidden", "false");
    },
  },
  actions: {},
  getters: {
    isElementHidden: (state) => state.elementHidden,
  },
});

export default store;
