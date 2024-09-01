<template>
  <div class="page-wrapper">
    <div class="cv-main">
      <div class="navbar-wrapper">
        <NavbarMain :navbarItems="navbarItemsArray" />
      </div>
      <router-view />
    </div>
  </div>
  <FooterMain :items="footerItems" />
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

  mounted() {
    this.$store.commit("setLanguageDE");
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

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

  methods: {
    setCookieLanguage(lang) {
      if (lang === "de") {
        console.log("german");
        this.$store.commit("setLanguageDE");
      } else if (lang === "en") {
        this.$store.commit("setLanguageEN");
        console.log("english");
      }
    },

    ...mapMutations(["setLanguageDE", "setLanguageEN"]),
  },
};
</script>
