<template>
  <div class="menu-frame">
    <!-- <div class="menu-header"><h3>Persönliches</h3></div> -->
    <div class="menu-item-container">
      <div class="menu-image-frame">
        <img class="menu-image" alt="picture" src="../assets/dummy.png" />
      </div>
      <div
        v-for="item in menuItems"
        :key="item.id"
        :id="item.id"
        class="menu-item"
      >
        <i class="menu-icon" :class="item.icon"></i>
        <a href="#">{{ item.name }}</a>
      </div>
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
