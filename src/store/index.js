import { createStore } from "vuex";

const store = createStore({
  state: {
    styleAttribute: "",
  },
  mutations: {
    updateStyleAttribute(state, newValue) {
      state.styleAttribute = newValue;
    },
  },
  actions: {},
  getters: {
    styleAttribute: (state) => state.styleAttribute,
  },
});

export default store;
