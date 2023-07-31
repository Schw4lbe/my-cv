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
      </div>

      <div class="button-container">
        <button type="submit" :disabled="!allInputsChecked">Los geht's!</button>
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
};
</script>

<style scoped>
.intro-container {
  position: absolute;
}

.readycheck-container {
  display: flex;
  justify-content: center;
  padding-top: 30%;
  height: 100%;
  width: 100%;
  opacity: 0;

  animation-name: fadeInReadyCheck;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-duration: 1s;
  animation-delay: 22s;
}

@keyframes fadeInReadyCheck {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.input-container {
  display: flex;
  justify-content: flex-start;
}
.input-label {
  color: white;
  padding: 1rem;
  margin-left: 30px;
}

.input-checkbox {
  display: block;
  margin: 1rem;
  background: white;
  width: 20px;
  height: 20px;
  opacity: 1;
  z-index: 1;
}

button {
  padding: 1rem;
  margin: 2rem;
}

.hide {
  display: none !important;
}
</style>
