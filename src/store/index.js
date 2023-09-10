import { createStore } from "vuex";

const store = createStore({
  state: {
    loginSuccess: localStorage.getItem("loginSuccess") === "true" || false,
    hideLogin: localStorage.getItem("hideLogin") === "true" || false,
    elementHidden: localStorage.getItem("elementHidden") === "true" || false,
    cvMainVisible: localStorage.getItem("cvMainVisible") === "true" || false,
    hideAnimation: localStorage.getItem("hideAnimation") === "true" || false,
    serverError: localStorage.getItem("serverError") === "true" || false,
    waitingForServer:
      localStorage.getItem("waitingForServer") === "true" || false,
  },

  mutations: {
    waitingForServerResponse(state) {
      state.waitingForServer = true;
      localStorage.setItem("waitingForServer", "true");
    },
    notWaitingForServerResponse(state) {
      state.waitingForServer = false;
      localStorage.setItem("waitingForServer", "false");
    },
    serverErrorTrue(state) {
      state.serverError = true;
      localStorage.setItem("serverError", "true");
    },
    serverErrorFalse(state) {
      state.serverError = false;
      localStorage.setItem("serverError", "false");
    },
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
    isWaitingForServer: (state) => state.waitingForServer,
    hasServerError: (state) => state.serverError,
    isLoginSuccess: (state) => state.loginSuccess,
    isLoginHidden: (state) => state.hideLogin,
    isAnimationHidden: (state) => state.hideAnimation,
    isElementHidden: (state) => state.elementHidden,
    isCvMainVisible: (state) => state.cvMainVisible,
  },
});

export default store;
