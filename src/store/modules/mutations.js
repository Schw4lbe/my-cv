export default {
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

  // select Language:
  setLanguageDE(state) {
    state.languageSelected = "de";
    localStorage.setItem("languageSelected", "de");
  },
  setLanguageEN(state) {
    state.languageSelected = "en";
    localStorage.setItem("languageSelected", "en");
  },
};
