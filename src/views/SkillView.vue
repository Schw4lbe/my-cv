<template>
  <div class="personal-data-wrapper">
    <h3 class="page-title animate__animated animate__backInDown">
      {{ getHeader }}
    </h3>
    <Skill :skillData="skillDataArray" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Skill from "@/components/Skill.vue";

export default {
  name: "SkillView",
  components: {
    Skill,
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
        .option;
    },
  },
};
</script>
