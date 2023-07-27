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
