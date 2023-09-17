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

<style scoped>
.toggle-radio {
  margin-left: 20px;
}

.separator {
  position: relative;
  top: -13px;
  font-size: 40px;
  color: #222222;
}
.switch {
  position: relative;
  width: 100px;
  height: 35px;
  text-align: center;
  background: #4393d8;
  transition: all 0.4s ease;
  border-radius: 25px;
}

input[type="radio"] {
  display: none;
}
.switch label {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.2);
  width: 60px;
  line-height: 40px;
  transition: all 0.4s ease;
}
label[for="de"] {
  position: absolute;
  left: 0px;
  height: 20px;
}
label[for="en"] {
  position: absolute;
  right: 0px;
}
#en:checked ~ .switch {
  background: #a54ca5;
}
#en:checked ~ .switch span {
  margin-left: -8px;
}
#en:checked ~ .switch span:after {
  background: #f2f2f2;
  height: 20px;
  margin-top: -8px;
  margin-left: 8px;
}
#de:checked ~ .switch label[for="de"] {
  color: #f2f2f2;
}
#en:checked ~ .switch label[for="en"] {
  color: #f2f2f2;
}
</style>
