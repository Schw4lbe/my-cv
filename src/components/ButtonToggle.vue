<template>
  <div class="toggle-button-container">
    <input class="toggle-button" type="checkbox" />
  </div>
</template>

<script>
export default {
  name: "ButtonToggle",
};
</script>

<style scoped>
:root {
  --white: #fffffe;
  --grey: #94a1b2;
  --purple-dark: #7f5af0;
}

.toggle-button-container {
  padding: 0.5rem;
}

input {
  -webkit-appearance: none;
  position: relative;
  width: 74px;
  height: 33px;
  border-radius: 20px;
  background-color: var(--grey);
  transition: background 0.3s;
  outline: none;
  cursor: pointer;
}

input::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  height: 25px;
  width: 25px;
  background: var(--white);
  transition: left 0.3s;
}

input:checked {
  background: var(--purple-dark);
}

input:checked::after {
  left: 75%;
}
</style>
