<template>
  <div class="toggle-theme-btn-container" @click="handleToggleTheme">
    <span v-if="!isToggled" class="toggle-theme-info">dark theme</span>
    <span v-if="isToggled" class="toggle-theme-info">light theme</span>
    <button class="toggle-theme">
      <i class="fa-regular fa-lightbulb"></i>
    </button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ToggleThemeBtn",

  computed: {
    ...mapGetters(["getIsThemeToggled"]),

    isToggled() {
      return this.getIsThemeToggled;
    },
  },

  methods: {
    ...mapMutations(["toggleTheme"]),

    handleToggleTheme() {
      const newBool = !this.getIsThemeToggled;
      this.toggleTheme(newBool);

      const htmlBody = document.querySelector("#theme-control");
      if (this.getIsThemeToggled) {
        htmlBody.classList.remove("theme-dark");
        htmlBody.classList.add("theme-light");
      } else {
        htmlBody.classList.remove("theme-light");
        htmlBody.classList.add("theme-dark");
      }
    },
  },
};
</script>
