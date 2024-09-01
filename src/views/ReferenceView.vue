<template>
  <div class="reference-wrapper">
    <div class="reference-data-container">
      <h3 class="page-title">{{ getHeader }}</h3>
      <AccordionInfo :items="referenceArray" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AccordionInfo from "@/components/AccordionInfo.vue";

export default {
  name: "ReferenceView",
  components: {
    AccordionInfo,
  },
  computed: {
    ...mapGetters(["selectedLanguage"]),

    referenceArray() {
      return this.$store.state.contentData[this.selectedLanguage]
        .referenceArray;
    },

    getHeader() {
      return this.$store.state.contentData[this.selectedLanguage].navbarItems[4]
        .name;
    },
  },
};
</script>
