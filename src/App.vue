<template>
  <MenuMain :menuItems="menuItemsArray"></MenuMain>
  <router-view />
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
        { id: "item1", name: "Persönliches", icon: "fa-solid fa-person" },
        {
          id: "item2",
          name: "Sales Erfahrung",
          icon: "fa-solid fa-comments-dollar",
        },
        { id: "item3", name: "Coding Erfahrung", icon: "fa-solid fa-code" },
        { id: "item4", name: "Referenzen", icon: "fa-solid fa-photo-film" },
        {
          id: "item5",
          name: "Selbstständigkeit",
          icon: "fa-solid fa-shoe-prints",
        },
      ],
    };
  },
};
</script>
