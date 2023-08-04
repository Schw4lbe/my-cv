import { createStore } from "vuex";

const store = createStore({
  state: {
    elementHidden: localStorage.getItem("elementHidden") === "true" || false,
    cvMainVisible: localStorage.getItem("cvMainVisible") === "true" || false,
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
    showCvMain(state) {
      state.cvMainVisible = true;
      localStorage.setItem("cvMainVisible", "true");
    },
  },
  actions: {},
  getters: {
    isElementHidden: (state) => state.elementHidden,
    isCvMainVisible: (state) => state.cvMainVisible,
  },
});

export default store;
