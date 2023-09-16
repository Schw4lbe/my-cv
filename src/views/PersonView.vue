<template>
  <div class="personal-data-wrapper">
    <h3 class="page-title">{{ getHeader }}</h3>
    <PersonalData :skills="skillsArray" />
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

    skillsArray() {
      return this.$store.state.contentData.skillsArray;
    },

    getHeader() {
      return this.$store.state.contentData[this.selectedLanguage].menuItems[0]
        .name;
    },
  },
};
</script>
