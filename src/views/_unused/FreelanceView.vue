<template>
  <div class="freelance-wrapper">
    <div class="freelance-data-container">
      <h3 class="page-title">{{ getHeader }}</h3>
      <AccordionInfo :items="freelanceItems" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AccordionInfo from "@/components/AccordionInfo.vue";

export default {
  name: "FreelanceView",
  components: {
    AccordionInfo,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    freelanceItems() {
      return this.$store.state.contentData[this.selectedLanguage]
        .freelanceItems;
    },

    getHeader() {
      return this.$store.state.contentData[this.selectedLanguage].navbarItems[3]
        .name;
    },
  },
};
</script>
