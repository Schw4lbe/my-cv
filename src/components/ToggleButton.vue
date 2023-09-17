<template>
  <div class="toggle-radio">
    <input @click="setLanguageToDE" type="radio" name="rdo" id="de" checked />
    <input @click="setLanguageToEN" type="radio" name="rdo" id="en" />
    <div class="switch">
      <label for="de">DE </label>
      <span class="separator">|</span>
      <label for="en"> EN</label>
      <span></span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ToggleButton",

  methods: {
    ...mapMutations(["setLanguageDE", "setLanguageEN"]),

    setLanguageToDE() {
      console.log("set language: DE");
      this.setLanguageDE();
    },

    setLanguageToEN() {
      console.log("set language: EN");
      this.setLanguageEN();
    },
  },
};
</script>
