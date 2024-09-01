<template>
  <div class="home-wrapper">
    <Home
      :header="introHeader"
      subHeader="Jean-Pierre Häussler"
      :intro="introData"
      :props="propsData"
      :testing="testingData"
      :hobbies="hobbiesData"
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

    propsData() {
      return this.$store.state.contentData[this.selectedLanguage].propsData;
    },

    testingData() {
      return this.$store.state.contentData.testingData;
    },

    hobbiesData() {
      return this.$store.state.contentData[this.selectedLanguage].hobbiesData;
    },

    techData() {
      return this.$store.state.contentData.techData;
    },

    getHeader() {
      return this.$store.state.contentData[this.selectedLanguage].navbarItems[2]
        .name;
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
