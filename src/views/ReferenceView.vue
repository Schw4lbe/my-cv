<template>
  <div class="reference-wrapper">
    <div class="reference-data-container">
      <h3 class="page-title animate__animated animate__backInDown">
        {{ getHeader }}
      </h3>
      <Reference
        :referenceData="getReferenceData"
        :refDescription="getRefDescription"
      />
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

    getRefDescription() {
      return this.$store.state.contentData[this.selectedLanguage]
        .referenceDescription;
    },

    getHeader() {
      return this.$store.state.contentData[this.selectedLanguage].navbarItems[2]
        .name;
    },
  },
};
</script>
