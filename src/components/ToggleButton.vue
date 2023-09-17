<template>
  <div class="toggle-radio">
    <input
      @click="setLanguageToDE"
      type="radio"
      name="rdo"
      id="de"
      :checked="selectedLanguage === 'de'"
    />
    <input
      @click="setLanguageToEN"
      type="radio"
      name="rdo"
      id="en"
      :checked="selectedLanguage === 'en'"
    />
    <div class="switch">
      <label for="de">DE </label>
      <span class="separator">|</span>
      <label for="en"> EN</label>
      <span></span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "ToggleButton",

  computed: {
    ...mapGetters(["selectedLanguage"]),
  },

  methods: {
    ...mapMutations(["setLanguageDE", "setLanguageEN"]),

    setLanguageToDE() {
      this.setLanguageDE();
    },

    setLanguageToEN() {
      this.setLanguageEN();
    },
  },
};
</script>
