<template>
  <div class="outro-wrapper">
    <h3 class="page-title animate__animated animate__backInDown">
      {{ getHeader }}
    </h3>
    <Outro
      :items="itemArr"
      :mainContent="setMainContent"
      :followMsg="setFollowMsg"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Outro from "@/components/Outro.vue";

export default {
  name: "OutroView",
  components: Outro,

  computed: {
    ...mapGetters(["selectedLanguage"]),

    getHeader() {
      return this.$store.state.contentData[this.selectedLanguage].navbarItems[3]
        .option;
    },

    setMainContent() {
      return this.$store.state.contentData[this.selectedLanguage]
        .outroMainContent;
    },

    itemArr() {
      return this.$store.state.contentData[this.selectedLanguage].outroItems;
    },

    setFollowMsg() {
      return this.$store.state.contentData[this.selectedLanguage].outroFollow;
    },
  },
};
</script>

<style></style>
