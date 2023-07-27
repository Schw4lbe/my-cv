<template>
  <div class="menu-header"><h3>Current Menu Item</h3></div>
  <div class="menu-container">
    <div id="item1" class="menu-item">Menu Item</div>
    <div id="item2" class="menu-item">Menu Item</div>
    <div id="item3" class="menu-item">Menu Item</div>
    <div id="item4" class="menu-item">Menu Item</div>
    <div id="item5" class="menu-item">Menu Item</div>
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
