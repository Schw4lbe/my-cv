<template>
  <h1>Sales Erfahrung</h1>
  <AccordionInfo :items="salesItems"></AccordionInfo>
</template>

<script>
import AccordionInfo from "@/components/AccordionInfo.vue";
import Logo1 from "../assets/logo.png";

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
          logo: Logo1,
          media: "",
        },
        {
          id: "2",
          header: "Header2",
          subtopics: ["Subtopic 1", "Subtopic 2", "Subtopic 3"],
          logo: "",
          media: "",
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
