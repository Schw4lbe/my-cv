<template>
  <div class="personal-data-wrapper">
    <h1 class="page-title">Skill Matrix</h1>
    <PersonalData :skills="skillsArray" />
  </div>
</template>

<script>
import PersonalData from "@/components/PersonalData.vue";

export default {
  name: "PersonView",
  components: {
    PersonalData,
  },
  data() {
    return {
      skillsArray: [
        { id: "1", icon: "fa-brands fa-html5", name: "html 5", rating: "9" },
        { id: "2", icon: "fa-brands fa-css3-alt", name: "css 3", rating: "8" },
        { id: "3", icon: "fa-brands fa-sass", name: "scss", rating: "8" },
        {
          id: "4",
          icon: "fa-brands fa-bootstrap",
          name: "bootstrap",
          rating: "7",
        },
        {
          id: "5",
          icon: "fa-solid fa-q",
          name: "quasar",
          rating: "3",
        },
        {
          id: "6",
          icon: "fa-brands fa-uikit",
          name: "ux / ui design",
          rating: "5",
        },
        {
          id: "7",
          icon: "fa-brands fa-js",
          name: "javascript es6",
          rating: "6",
        },
        {
          id: "8",
          icon: "fa-brands fa-js",
          name: "javascript dom",
          rating: "7",
        },
        {
          id: "9",
          icon: "fa-solid fa-t",
          name: "typescript",
          rating: "2",
        },
        {
          id: "10",
          icon: "fa-brands fa-node-js",
          name: "node.js",
          rating: "3",
        },
        { id: "11", icon: "fa-solid fa-e", name: "express", rating: "1" },
        { id: "12", icon: "fa-brands fa-react", name: "react", rating: "2" },
        {
          id: "13",
          icon: "fa-brands fa-vuejs",
          name: "vue js 2 & 3",
          rating: "7",
        },
        {
          id: "14",
          icon: "fa-brands fa-vuejs",
          name: "vuex",
          rating: "1",
        },
        {
          id: "15",
          icon: "fa-regular fa-window-restore",
          name: "browserstack",
          rating: "6",
        },
        {
          id: "16",
          icon: "fa-brands fa-microsoft",
          name: "visual studio code",
          rating: "8",
        },
        {
          id: "17",
          icon: "fa-brands fa-microsoft",
          name: "visual studio 2022",
          rating: "4",
        },
        {
          id: "18",
          icon: "fa-solid fa-code",
          name: "phpstorm",
          rating: "5",
        },
        // VS CODE + PHP Storm mit aufnehmen
      ],
    };
  },
};
</script>
