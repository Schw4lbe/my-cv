<template>
  <div class="outro-wrapper">
    <h3 class="page-title">{{ setHeader }}</h3>
    <OutroSummit
      :items="itemArr"
      :subHeader="setSubHeader"
      :mainContent="setMainContent"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OutroSummit from "@/components/OutroSummit.vue";

export default {
  name: "OutroView",
  components: OutroSummit,

  computed: {
    ...mapGetters(["selectedLanguage"]),

    setHeader() {
      return this.$store.state.contentData[this.selectedLanguage].menuItems[5]
        .name;
    },

    setSubHeader() {
      return this.$store.state.contentData[this.selectedLanguage].outroHeader;
    },

    setMainContent() {
      return this.$store.state.contentData[this.selectedLanguage]
        .outroMainContent;
    },

    itemArr() {
      return this.$store.state.contentData[this.selectedLanguage].outroItems;
    },
  },
};
</script>

<style></style>
