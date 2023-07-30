import { createStore } from "vuex";

const store = createStore({
  state: {
    elementHidden: false,
  },
  mutations: {
    hideElement(state) {
      state.elementHidden = true;
    },
  },
  actions: {},
  getters: {
    isElementHidden: (state) => state.elementHidden,
  },
});

export default store;
