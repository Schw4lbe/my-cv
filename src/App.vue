<template>
  <router-view />
  <MenuMain :menuItems="youtMenuItemsArray"></MenuMain>
</template>

<script>
import MenuMain from "@/components/MenuMain.vue";

export default {
  components: {
    MenuMain,
  },
  data() {
    return {
      youtMenuItemsArray: [
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
