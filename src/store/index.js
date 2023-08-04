import { createStore } from "vuex";

const store = createStore({
  state: {
    elementHidden: localStorage.getItem("elementHidden") === "true" || false,
    cvMainVisible: localStorage.getItem("cvMainVisible") === "true" || false,
    hideAnimation: localStorage.getItem("hideAnimation") === "true" || false,
  },
  mutations: {
    hideAnimation(state) {
      state.hideAnimation = true;
      localStorage.setItem("hideAnimation", "true");
    },
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
    isAnimationHidden: (state) => state.hideAnimation,
    isElementHidden: (state) => state.elementHidden,
    isCvMainVisible: (state) => state.cvMainVisible,
  },
});

export default store;
