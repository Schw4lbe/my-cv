<template>
  <div class="coding-wrapper">
    <div class="coding-data-container">
      <h3 class="page-title">{{ getHeader }}</h3>
      <AccordionInfo :items="codingItems" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AccordionInfo from "@/components/AccordionInfo.vue";

export default {
  name: "CodingView",
  components: {
    AccordionInfo,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    codingItems() {
      return this.$store.state.contentData[this.selectedLanguage].codingItems;
    },

    getHeader() {
      return this.$store.state.contentData[this.selectedLanguage].navbarItems[2]
        .name;
    },
  },
};
</script>
