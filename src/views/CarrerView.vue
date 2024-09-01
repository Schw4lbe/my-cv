<template>
  <h3 class="page-title">Development</h3>
  <TimeLine :timelineItems="getTimeLineItems" />
</template>

<script>
import TimeLine from "@/components/TimeLine.vue";
import { mapGetters } from "vuex";

export default {
  name: "DevView",
  components: {
    TimeLine,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    getTimeLineItems() {
      return this.$store.state.contentData[this.selectedLanguage].timelineItems;
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
