<template>
  <div class="cv-readycheck">
    <ReadyCheck :inputs="startInputs"></ReadyCheck>
  </div>
  <div class="cv-main">
    <MenuMain :menuItems="menuItemsArray"></MenuMain>
    <router-view />
  </div>
</template>

<script>
import MenuMain from "@/components/MenuMain.vue";
import ReadyCheck from "@/components/ReadyCheck.vue";

export default {
  components: {
    MenuMain,
    ReadyCheck,
  },
  data() {
    return {
      menuItemsArray: [
        {
          id: "item1",
          name: "Persönliches",
          icon: "fa-solid fa-person",
          path: "/person",
        },
        {
          id: "item2",
          name: "Sales Erfahrung",
          icon: "fa-solid fa-comments-dollar",
          path: "/sales",
        },
        {
          id: "item3",
          name: "Coding Erfahrung",
          icon: "fa-solid fa-code",
          path: "/coding",
        },
        {
          id: "item4",
          name: "Referenzen",
          icon: "fa-solid fa-photo-film",
          path: "/reference",
        },
        {
          id: "item5",
          name: "Selbstständigkeit",
          icon: "fa-solid fa-shoe-prints",
          path: "/freelance",
        },
      ],
      startInputs: [
        { label: "Tee oder Kaffee frisch aufgebrüht?" },
        { label: "Notizblock bereit?" },
        { label: "Die wichtigsten Personen sind anwesend?" },
      ],
    };
  },
};
</script>

<style scoped>
.cv-readycheck {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #444;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
