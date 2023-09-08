<template>
  <div class="login-container">
    <LoginView @login-clicked="handleLogin" />
  </div>
  <div v-if="loginSuccess === true" class="page-wrapper">
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
  </div>
  <FooterMain :content="contentData" :contact="contactData" />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import NavbarMain from "@/components/NavbarMain.vue";
import ReadyCheck from "@/components/ReadyCheck.vue";
import LoadingAnimatin from "@/components/LoadingAnimation.vue";
import FooterMain from "@/components/FooterMain.vue";
import LoginView from "@/views/LoginView.vue";

export default {
  components: {
    NavbarMain,
    ReadyCheck,
    LoadingAnimatin,
    FooterMain,
    LoginView,
  },
  data() {
    return {
      loginSuccess: false,
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
      contentData: [],
      contactData: [
        {
          link: "https://www.linkedin.com/in/jean-pierre-h%C3%A4ussler-66019118a/",
          icon: "fa-brands fa-linkedin",
        },
        {
          link: "https://www.xing.com/profile/JeanPierre_Haeussler/cv",
          icon: "fa-brands fa-square-xing",
        },
        {
          link: "https://github.com/TapeMate",
          icon: "fa-brands fa-square-github",
        },
        {
          link: "https://soundcloud.com/tape-mate",
          icon: "fa-brands fa-soundcloud",
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
    handleLogin() {
      console.log("handle Login.");
      this.loginSuccess = true;
      console.log(this.loginSuccess);
    },

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
