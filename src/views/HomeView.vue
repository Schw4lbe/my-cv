<template>
  <div class="home-wrapper">
    <HomeScreen
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
import HomeScreen from "@/components/HomeScreen.vue";

export default {
  name: "HomeView",
  components: {
    HomeScreen,
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
      return this.$store.state.contentData[this.selectedLanguage].menuItems[2]
        .name;
    },
  },
};
</script>
