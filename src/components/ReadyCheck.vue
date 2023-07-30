<template>
  <div class="readycheck-container">
    <form action="">
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
export default {
  name: "ReadyCheck",
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
</style>
