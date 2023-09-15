export default {
  loginSuccess: localStorage.getItem("loginSuccess") === "true" || false,
  hideLogin: localStorage.getItem("hideLogin") === "true" || false,
  elementHidden: localStorage.getItem("elementHidden") === "true" || false,
  cvMainVisible: localStorage.getItem("cvMainVisible") === "true" || false,
  serverError: localStorage.getItem("serverError") === "true" || false,
  waitingForServer:
    localStorage.getItem("waitingForServer") === "true" || false,
};
