<template>
  <h1>Sales Erfahrung</h1>
  <AccordionInfo :items="salesItems"></AccordionInfo>
</template>

<script>
import AccordionInfo from "@/components/AccordionInfo.vue";

export default {
  name: "SalesView",
  components: {
    AccordionInfo,
  },
  data() {
    return {
      salesItems: [
        {
          id: "1",
          header: "Header 1",
          subtopics: ["Subtopic 1", "Subtopic 2", "Subtopic 3"],
        },
        {
          id: "2",
          header: "Header2",
          subtopics: ["Subtopic 1", "Subtopic 2", "Subtopic 3"],
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  margin: 2rem;
}
</style>
