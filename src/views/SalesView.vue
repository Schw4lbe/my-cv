<template>
  <div class="sales-wrapper">
    <div class="sales-data-container">
      <h3 class="page-title">{{ getHeader }}</h3>
      <AccordionInfo :items="salesItems" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AccordionInfo from "@/components/AccordionInfo.vue";

export default {
  name: "SalesView",
  components: {
    AccordionInfo,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    salesItems() {
      return this.$store.state.contentData[this.selectedLanguage].salesItems;
    },

    getHeader() {
      return this.$store.state.contentData[this.selectedLanguage].menuItems[1]
        .name;
    },
  },
};
</script>
