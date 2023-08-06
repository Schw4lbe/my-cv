<template>
  <div class="container">
    <HomeScreen
      header="Lebenslauf"
      subHeader="Jean-Pierre Häussler"
      :intro="introData"
      :props="propsData"
      :hobbies="hobbiesData"
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
    };
  },
};
</script>
