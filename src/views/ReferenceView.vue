<template>
  <div class="reference-wrapper">
    <div class="reference-data-container">
      <h3 class="page-title">{{ getHeader }}</h3>
      <AccordionReference :items="referenceArray" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AccordionReference from "@/components/AccordionReference.vue";

export default {
  name: "ReferenceView",
  components: {
    AccordionReference,
  },
  computed: {
    ...mapGetters(["selectedLanguage"]),

    referenceArray() {
      return this.$store.state.contentData[this.selectedLanguage]
        .referenceArray;
    },

    getHeader() {
      return this.$store.state.contentData[this.selectedLanguage].menuItems[4]
        .name;
    },
  },
};
</script>
