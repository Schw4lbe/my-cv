<template>
  <h1>Coding Erfahrung</h1>
  <AccordionInfo :items="codingItems"></AccordionInfo>
</template>

<script>
import AccordionInfo from "@/components/AccordionInfo.vue";

export default {
  name: "CodingView",
  components: {
    AccordionInfo,
  },
  data() {
    return {
      codingItems: [
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
