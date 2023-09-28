<template>
  <div class="intro-container">
    <IntroScene :content="contentArray" />
  </div>
  <div class="readycheck-container">
    <div class="readycheck-background"></div>
    <div class="form-wrapper">
      <form action="" @submit="formSubmit">
        <h3>{{ content.header }}</h3>
        <div
          v-for="(input, index) in content.content"
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
            {{ content.buttonText }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import IntroScene from "@/components/IntroScene.vue";

export default {
  emits: ["form-submit", "inputsChecked"], // to stop warning in webbrowser
  name: "ReadyCheck",
  components: {
    IntroScene,
  },
  props: {
    content: Object,
  },
  computed: {
    ...mapGetters(["selectedLanguage"]),

    allInputsChecked() {
      return this.content.content.every((input) => input.checked);
    },

    contentArray() {
      return this.$store.state.contentData[this.selectedLanguage].introContent;
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
