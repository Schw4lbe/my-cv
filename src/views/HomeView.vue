<template>
  <div class="home-wrapper">
    <Home
      :header="introHeader"
      subHeader="Jean-Pierre Häussler"
      :intro="introData"
      :technologies="techData"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Home from "@/components/Home.vue";

export default {
  name: "HomeView",
  components: {
    Home,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    introHeader() {
      return this.$store.state.contentData[this.selectedLanguage].introHeader;
    },

    introData() {
      return this.$store.state.contentData[this.selectedLanguage].introData;
    },

    techData() {
      return this.$store.state.contentData.techData;
    },
  },

  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>
