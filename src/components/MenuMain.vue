<template>
  <div class="menu-header"><h3>Current Menu Item</h3></div>
  <div class="menu-container">
    <div
      v-for="item in menuItems"
      :key="item.id"
      :id="item.id"
      class="menu-item"
    >
      {{ item.name }}
    </div>
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
