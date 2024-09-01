<template>
  <div class="reference-wrapper">
    <div class="reference-data-container">
      <h3 class="page-title">{{ getHeader }}</h3>
      <Reference :referenceData="getReferenceData" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Reference from "@/components/Reference.vue";

export default {
  name: "ReferenceView",
  components: {
    Reference,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    getReferenceData() {
      return this.$store.state.contentData[this.selectedLanguage]
        .referenceArray;
    },

    getHeader() {
      return this.$store.state.contentData[this.selectedLanguage].navbarItems[2]
        .name;
    },
  },
};
</script>
