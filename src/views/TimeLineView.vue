<template>
  <h3 class="page-title animate__animated animate__backInDown">
    {{ getHeader }}
  </h3>
  <TimeLine
    :timelineItems="getTimeLineItems"
    :timelineDescription="getTimelineDescription"
    :btnContent="getBtnContent"
  />
</template>

<script>
import TimeLine from "@/components/TimeLine.vue";
import { mapGetters } from "vuex";

export default {
  name: "TimeLineView",
  components: {
    TimeLine,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    getTimeLineItems() {
      return this.$store.state.contentData[this.selectedLanguage].timelineItems;
    },

    getTimelineDescription() {
      return this.$store.state.contentData[this.selectedLanguage]
        .timelineDescription;
    },

    getBtnContent() {
      return this.$store.state.contentData[this.selectedLanguage]
        .timelineBtnBackUp;
    },

    getHeader() {
      return this.$store.state.contentData[this.selectedLanguage].navbarItems[1]
        .name;
    },
  },

  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>
