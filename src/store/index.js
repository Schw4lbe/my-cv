import { createStore } from "vuex";

const store = createStore({
  state: {
    loginSuccess: localStorage.getItem("loginSuccess") === "true" || false,
    hideLogin: localStorage.getItem("hideLogin") === "true" || false,
    elementHidden: localStorage.getItem("elementHidden") === "true" || false,
    cvMainVisible: localStorage.getItem("cvMainVisible") === "true" || false,
    hideAnimation: localStorage.getItem("hideAnimation") === "true" || false,
  },
  mutations: {
    loginSuccess(state) {
      state.loginSuccess = true;
      localStorage.setItem("loginSuccess", "true");
    },
    hideLogin(state) {
      state.hideLogin = true;
      localStorage.setItem("hideLogin", "true");
    },
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
    isLoginSuccess: (state) => state.loginSuccess,
    isLoginHidden: (state) => state.hideLogin,
    isAnimationHidden: (state) => state.hideAnimation,
    isElementHidden: (state) => state.elementHidden,
    isCvMainVisible: (state) => state.cvMainVisible,
  },
});

export default store;
