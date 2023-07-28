<template>
  <router-view />
  <MenuMain :menuItems="menuItemsArray"></MenuMain>
</template>

<script>
import MenuMain from "@/components/MenuMain.vue";

export default {
  components: {
    MenuMain,
  },
  data() {
    return {
      menuItemsArray: [
        { id: "item1", name: "Persönliches" },
        { id: "item2", name: "Menu Item" },
        { id: "item3", name: "Menu Item" },
        { id: "item4", name: "Menu Item" },
        { id: "item5", name: "Menu Item" },
      ],
    };
  },
};
</script>
