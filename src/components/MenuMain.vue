<template>
  <div class="menu-container">
    <div class="menu-item">Menu Item</div>
    <div class="menu-item">Menu Item</div>
    <div class="menu-item">Menu Item</div>
    <div class="menu-item">Menu Item</div>
    <div class="menu-item">Menu Item</div>
  </div>
</template>

<script>
export default {
  name: "MenuMain",
  props: {
    menuItems: Array,
  },
};
</script>

<style scoped>
.menu-container {
  position: absolute;
  margin: 25px;
  top: 0;
  right: 150px;
}
.menu-item {
  position: absolute;
  height: 150px;
  width: 150px;
  border: 1px solid black;
}
</style>
