<template>
  <div class="personal-data-wrapper">
    <h3 class="page-title">{{ getHeader }}</h3>
    <PersonalData :skillData="skillDataArray" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PersonalData from "@/components/PersonalData.vue";

export default {
  name: "PersonView",
  components: {
    PersonalData,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    skillDataArray() {
      return this.$store.state.contentData[this.selectedLanguage].skillData;
    },

    subHeaderArray() {
      return this.$store.state.contentData[this.selectedLanguage]
        .skillsSubheader;
    },

    getHeader() {
      return this.$store.state.contentData[this.selectedLanguage].navbarItems[0]
        .name;
    },
  },
};
</script>
