<template>
  <div class="cv-readycheck" :class="{ hide: isElementHidden }" id="test">
    <ReadyCheck
      :inputs="startInputs"
      @form-submitted="onFormSubmitted"
      @inputsChecked="handleClassAssigment"
    />
  </div>
  <div class="cv-main">
    <MenuMain :menuItems="menuItemsArray"></MenuMain>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MenuMain from "@/components/MenuMain.vue";
import ReadyCheck from "@/components/ReadyCheck.vue";

export default {
  components: {
    MenuMain,
    ReadyCheck,
  },
  data() {
    return {
      elementHidden: false,
      isVissible: false,
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
        {
          label: "Tee oder Kaffee frisch aufgebrüht?",
          icon: "fa-solid fa-mug-hot",
        },
        {
          label: "Notizblock bereit?",
          icon: "fa-sharp fa-solid fa-pen-to-square",
        },
        {
          label: "Die wichtigsten Personen sind anwesend?",
          icon: "fa-solid fa-people-group",
        },
      ],
    };
  },
  created() {
    const elementHidden = localStorage.getItem("elementHidden");
    if (elementHidden === "true") {
      this.hideElement();
    } else {
      this.showElement();
    }
  },
  computed: {
    ...mapGetters(["isElementHidden"]),
  },
  methods: {
    ...mapMutations(["hideElement", "showElement"]),
    onFormSubmitted() {
      this.hideElement();
    },

    handleClassAssigment() {
      this.isVissible = true;

      // home view elements:
      const portrait = document.querySelector("#portrait");
      const loadingHeader = document.querySelector("#loading-header");

      // main menu elements:
      const menuFrame = document.querySelector("#menu-frame");
      const menuItemContainer = document.querySelector("#menu-item-container");
      const menuItem = document.querySelectorAll(".menu-item-selector");

      if (this.isVissible === true) {
        portrait.classList.add("portrait");
        loadingHeader.classList.add("loading-header");

        menuFrame.classList.add("menu-frame");
        menuItemContainer.classList.add("menu-item-container");
        menuItem.forEach((element) => {
          element.classList.add("menu-item");
        });
      }
    },
  },
};
</script>
