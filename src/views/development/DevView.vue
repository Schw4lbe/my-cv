<template>
  <h3 class="page-title">Development</h3>
  <DevComponent :timelineItems="getTimeLineItems" />
</template>

<script>
import DevComponent from "@/components/development/DevComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "DevView",
  components: {
    DevComponent,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    getTimeLineItems() {
      return this.$store.state.contentData[this.selectedLanguage].timelineItems;
    },
  },
};
</script>
