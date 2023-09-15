export default {
  isWaitingForServer: (state) => state.waitingForServer,
  hasServerError: (state) => state.serverError,
  isLoginSuccess: (state) => state.loginSuccess,
  isLoginHidden: (state) => state.hideLogin,
  isElementHidden: (state) => state.elementHidden,
  isCvMainVisible: (state) => state.cvMainVisible,
};
