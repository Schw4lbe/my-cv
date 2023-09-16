<template>
  <div class="coding-wrapper">
    <div class="coding-data-container">
      <h3 class="page-title">Coding Erfahrung</h3>
      <AccordionInfo :items="codingItems" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AccordionInfo from "@/components/AccordionInfo.vue";
// import Logo3 from "@/assets/img/logo-vivax-solution.jpg";
// import Logo4 from "@/assets/img/logo-gfn.svg";

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
  },
};
</script>
