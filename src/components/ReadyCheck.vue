<template>
  <div class="intro-container">
    <IntroScene />
  </div>
  <div class="readycheck-container">
    <div class="form-wrapper">
      <form action="" @submit="formSubmit">
        <h3>Alle Vorbereitungen getroffen?</h3>
        <div
          v-for="(input, index) in inputs"
          :key="index"
          class="input-container"
        >
          <input
            class="input-checkbox"
            type="checkbox"
            :id="input.label"
            v-model="input.checked"
          />
          <label class="input-label" :for="input.label">{{
            input.label
          }}</label>
          <div class="icon-container">
            <i :class="input.icon" class="input-icon"></i>
          </div>
        </div>

        <div class="button-container">
          <button
            type="submit"
            :disabled="!allInputsChecked"
            @click="checkInputs"
          >
            Los geht's!
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import IntroScene from "@/components/IntroScene.vue";

export default {
  emits: ["form-submit", "inputsChecked"], // to stop warning in webbrowser
  name: "ReadyCheck",
  components: {
    IntroScene,
  },
  props: {
    inputs: Array,
  },
  computed: {
    allInputsChecked() {
      return this.inputs.every((input) => input.checked);
    },
  },
  methods: {
    checkInputs() {
      this.$emit("inputsChecked");
    },

    formSubmit(event) {
      event.preventDefault();
      this.$emit("form-submit");
    },
  },
};
</script>
