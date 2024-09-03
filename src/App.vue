<template>
  <div class="page-wrapper">
    <div class="cv-main">
      <div class="navbar-wrapper">
        <NavbarMain :navbarItems="navbarItemsArray" />
      </div>
      <router-view />
    </div>
    <FooterMain :items="footerItems" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import NavbarMain from "@/components/utility/NavbarMain.vue";
import FooterMain from "@/components/utility/FooterMain.vue";

export default {
  components: {
    NavbarMain,
    FooterMain,
  },

  computed: {
    ...mapGetters(["selectedLanguage", "getIsThemeToggled"]),

    selectedLanguage() {
      return this.$store.getters.selectedLanguage;
    },

    navbarItemsArray() {
      return this.$store.state.contentData[this.selectedLanguage].navbarItems;
    },

    footerItems() {
      return this.$store.state.contentData.footerItems;
    },
  },

  mounted() {
    this.initLocalStorage();
  },

  methods: {
    initLocalStorage() {
      // set default language to german
      if (localStorage.getItem("languageSelected") === null) {
        this.$store.commit("setLanguageDE");
      }

      // set default theme
      if (localStorage.getItem("isThemeToggled") === null) {
        this.toggleTheme(false);
      }
    },

    setCookieLanguage(lang) {
      if (lang === "de") {
        this.$store.commit("setLanguageDE");
      } else if (lang === "en") {
        this.$store.commit("setLanguageEN");
      }
    },

    ...mapMutations(["setLanguageDE", "setLanguageEN", "toggleTheme"]),
  },
};
</script>
