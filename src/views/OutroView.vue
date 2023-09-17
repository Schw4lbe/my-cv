<template>
  <div class="outro-wrapper">
    <h3 class="page-title">{{ setHeader }}</h3>
    <OutroSummit />
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
  },
};
</script>

<style></style>
