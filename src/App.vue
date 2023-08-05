<template>
  <div class="loading-animation-container">
    <LoadingAnimatin :class="{ hide: isAnimationHidden }"></LoadingAnimatin>
  </div>
  <div class="cv-readycheck" :class="{ hide: isElementHidden }" id="test">
    <ReadyCheck :inputs="startInputs" @form-submitted="onFormSubmitted" />
  </div>
  <div class="cv-main" v-if="isCvMainVisible">
    <MenuMain :menuItems="menuItemsArray"></MenuMain>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MenuMain from "@/components/MenuMain.vue";
import ReadyCheck from "@/components/ReadyCheck.vue";
import LoadingAnimatin from "./components/LoadingAnimation.vue";

export default {
  components: {
    MenuMain,
    ReadyCheck,
    LoadingAnimatin,
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
          name: "Selbstständigkeit",
          icon: "fa-solid fa-shoe-prints",
          path: "/freelance",
        },
        {
          id: "item5",
          name: "Referenzen",
          icon: "fa-solid fa-photo-film",
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
<style scoped>
.loading-animation-container {
  animation-name: hideContainer;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-duration: 4.5s;
}

@keyframes hideContainer {
  0% {
    display: block;
  }
  100% {
    display: none;
  }
}
</style>
