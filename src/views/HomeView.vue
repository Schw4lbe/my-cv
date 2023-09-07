<template>
  <div class="home-wrapper">
    <HomeScreen
      header="Lebenslauf"
      subHeader="Jean-Pierre Häussler"
      :intro="introData"
      :props="propsData"
      :hobbies="hobbiesData"
      :technologies="techData"
    />
  </div>
</template>

<script>
import HomeScreen from "@/components/HomeScreen.vue";

export default {
  name: "HomeView",
  components: {
    HomeScreen,
  },
  data() {
    return {
      introData: [
        {
          header: "Präambel",
          text: "Dieser online Lebenslauf ist mit der Intention enstanden, meinen aktuellen Leistungsstand in der Frontend Entwicklung dar zu stellen. Zusammengefasst habe ich 6 Monate Weiterbildung und ein gutes Jahr Berufserfahrung sammeln können. Da dies ein recht überschaubarer Rahmen an Praxiserfahrung ist, möchte ich die Gelegenheit nutzen, mich mit bewegten Inhalten zu präsentieren.",
        },
      ],
      propsData: [
        "Eigenmotivation",
        "Verantwortungsbewustsein",
        "Authentizität",
      ],
      hobbiesData: [
        "Sport, fernöstliche Kampf- & Körperkunst",
        "Musik Produktion, DJ-ing & Livestreams",
        "E-Sport, Game Development (C# + Unity)",
      ],
      techData: [
        { name: "VUE.JS 3", icon: "fa-brands fa-vuejs" },
        {
          name: "VUEX",
          icon: "fa-brands fa-vuejs",
        },
        { name: "VUE Router", icon: "fa-brands fa-vuejs" },
        {
          name: "JavaScript ES6",
          icon: "fa-brands fa-square-js",
        },
        { name: "SCSS", icon: "fa-brands fa-sass" },
        { name: "HTML 5", icon: "fa-brands fa-html5" },
        { name: "Bootstrap 5.2", icon: "fa-brands fa-bootstrap" },
        { name: "Visual Studio Code", icon: "fa-brands fa-microsoft" },
      ],
    };
  },
};
</script>
