<template>
  <div class="personal-data-wrapper">
    <PersonalData
      :properties="propertiesArray"
      :hobbies="hobbiesArray"
      :skills="skillsArray"
    ></PersonalData>
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
        { id: "5", icon: "fa-brands fa-code", name: "quasar", rating: "3" },
        { id: "6", icon: "fa-brands fa-uikit", name: "ux / ui", rating: "5" },
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
          rating: "8",
        },
        {
          id: "9",
          icon: "fa-sharp fa-light fa-superscript",
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
          rating: "6",
        },
        {
          id: "14",
          icon: "fa-regular fa-window-restore",
          name: "browserstack",
          rating: "6",
        },
      ],
      propertiesArray: [
        { id: "1", name: "Eigenmotivation" },
        { id: "2", name: "Verantwortungsbewustsein" },
        { id: "3", name: "Authentizität" },
      ],
      hobbiesArray: [
        { id: "1", name: "Sport, fernöstliche Kampf- & Körperkunst" },
        { id: "2", name: "Musik Produktion, DJ-ing & Livestreams" },
        { id: "3", name: "E-Sport, Game Development (C# + Unity)" },
      ],
    };
  },
};
</script>

<style scoped>
.personal-data-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #666;
}
</style>
