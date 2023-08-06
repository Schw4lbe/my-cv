<template>
  <div class="loading-animation-container">
    <LoadingAnimatin :class="{ hide: isAnimationHidden }" />
  </div>
  <div class="cv-readycheck" :class="{ hide: isElementHidden }" id="test">
    <ReadyCheck :inputs="startInputs" @form-submitted="onFormSubmitted" />
  </div>
  <div class="cv-main" v-if="isCvMainVisible">
    <div class="navbar-wrapper">
      <NavbarMain :menuItems="menuItemsArray" />
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import NavbarMain from "@/components/NavbarMain.vue";
import ReadyCheck from "@/components/ReadyCheck.vue";
import LoadingAnimatin from "./components/LoadingAnimation.vue";

export default {
  components: {
    NavbarMain,
    ReadyCheck,
    LoadingAnimatin,
  },
  data() {
    return {
      menuItemsArray: [
        {
          id: "item1",
          name: "Skill Matrix",
          path: "/person",
        },
        {
          id: "item2",
          name: "Sales Erfahrung",
          path: "/sales",
        },
        {
          id: "item3",
          name: "Coding Erfahrung",
          path: "/coding",
        },
        {
          id: "item4",
          name: "Selbstständigkeit",
          path: "/freelance",
        },
        {
          id: "item5",
          name: "Referenzen",
          path: "/reference",
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
    const cvMainVisible = localStorage.getItem("cvMainVisible");
    if (cvMainVisible === "true") {
      this.showCvMain();
    } else {
      return;
    }

    const elementHidden = localStorage.getItem("elementHidden");
    if (elementHidden === "true") {
      this.hideElement();
    } else {
      this.showElement();
    }
  },
  computed: {
    ...mapGetters(["isElementHidden", "isCvMainVisible", "isAnimationHidden"]),
  },
  methods: {
    hideLoadingAnimation() {
      this.hideAnimation();
      console.log("hide Loading now.");
    },

    ...mapMutations([
      "hideElement",
      "hideAnimation",
      "showElement",
      "showCvMain",
    ]),
    onFormSubmitted() {
      this.hideElement();
      this.showCvMain();
      this.hideAnimation();
    },
  },
};
</script>
