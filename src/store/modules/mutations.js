export default {
  setLanguageDE(state) {
    state.languageSelected = "de";
    localStorage.setItem("languageSelected", "de");
  },
  setLanguageEN(state) {
    state.languageSelected = "en";
    localStorage.setItem("languageSelected", "en");
  },

  toggleTheme(state, bool) {
    state.isThemeToggled = bool;
    localStorage.setItem("isThemeToggled", bool);
  },
};
