<template>
  <div class="toggle-radio">
    <input type="radio" name="rdo" id="de" checked />
    <input type="radio" name="rdo" id="en" />
    <div class="switch">
      <label for="de">DE </label>
      <span class="separator">|</span>
      <label for="en"> EN</label>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonToggle",
};
</script>
