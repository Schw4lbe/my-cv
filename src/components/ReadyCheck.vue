<template>
  <div class="intro-container">
    <IntroScene></IntroScene>
  </div>
  <div class="readycheck-container">
    <form action="" @submit.prevent="$emit('form-submitted')">
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
        <label class="input-label" :for="input.label">{{ input.label }}</label>
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
</template>
<script>
import IntroScene from "@/components/IntroScene.vue";

export default {
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
      console.log("inputs checked.");
      this.$emit("inputsChecked");
    },
  },
};
</script>
