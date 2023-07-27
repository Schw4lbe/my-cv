<template>
  <div class="menu-header"><h3>Current Menu Item</h3></div>
  <div class="menu-container">
    <div class="menu-image-frame">
      <img class="menu-image" alt="picture" src="../assets/dummy.png" />
    </div>
    <div
      v-for="item in menuItems"
      :key="item.id"
      :id="item.id"
      class="menu-item"
    >
      <a href="#">{{ item.name }}</a>
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
