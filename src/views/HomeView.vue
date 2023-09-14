<template>
  <div class="home-wrapper">
    <HomeScreen
      header="Lebenslauf"
      subHeader="Jean-Pierre Häussler"
      :intro="introData"
      :props="propsData"
      :testing="testingData"
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
      testingData: [
        {
          icon: "fa-brands fa-windows",
          os: "Windows 10 22H2",
          browser: "Google Chrome v.116",
          iconbrowser: "fa-brands fa-chrome",
        },
        {
          icon: "fa-brands fa-windows",
          os: "Windows 10 22H2",
          browser: "Microsoft Edge v.116",
          iconbrowser: "fa-brands fa-edge",
        },
        {
          icon: "fa-brands fa-windows",
          os: "Windows 10 22H2",
          browser: "Mozilla Firefox v.117",
          iconbrowser: "fa-brands fa-firefox-browser",
        },
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
        { name: "Gulp", icon: "fa-brands fa-gulp" },
        { name: "Autoprefixer", icon: "fa-brands fa-autoprefixer" },
        { name: "PostCSS", icon: "fa-brands fa-css3-alt" },
        { name: "Apache", icon: "fa-solid fa-helicopter" },
        { name: "FileZilla", icon: "fa-solid fa-file" },
        { name: "Express", icon: "fa-solid fa-e" },
        { name: "JSON Web Token", icon: "fa-solid fa-hashtag" },
        { name: "Postman", icon: "fa-solid fa-code-pull-request" },
        { name: "Ubuntu on Azure", icon: "fa-brands fa-ubuntu" },
        { name: "PM2 Manager", icon: "fa-solid fa-server" },
        { name: "Axios", icon: "fa-solid fa-a" },
        { name: "NGINX", icon: "fa-solid fa-server" },
        { name: "Let's Encrypt", icon: "fa-brands fa-expeditedssl" },
      ],
    };
  },
};
</script>
