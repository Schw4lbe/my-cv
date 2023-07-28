<template>
  <div class="menu-frame">
    <div class="menu-item-container">
      <div class="menu-image-frame">
        <router-link :to="homeLink">
          <img class="menu-image" alt="picture" src="../assets/dummy.png"
        /></router-link>
      </div>
      <div
        v-for="item in menuItems"
        :key="item.id"
        :id="item.id"
        class="menu-item"
      >
        <router-link :to="item.path">
          <i class="menu-icon" :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "MenuMain",
  props: {
    menuItems: Array,
  },
  data() {
    return {
      homeLink: router.options.routes[0],
    };
  },
};
</script>
