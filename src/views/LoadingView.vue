<template>
  <div>
    <LoadingScreen header="Lebenslauf" subHeader="Jean-Pierre Häussler" />
    <PersonalData
      :properties="propertiesArray"
      :hobbies="hobbiesArray"
      :skills="skillsArray"
    ></PersonalData>
  </div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen.vue";
import PersonalData from "@/components/PersonalData.vue";

export default {
  name: "LoadingView",
  components: {
    LoadingScreen,
    PersonalData,
  },
  data() {
    return {
      skillsArray: [
        { id: "1", name: "html", value: "90" },
        { id: "2", name: "css", value: "80" },
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
