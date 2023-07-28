<template>
  <PersonalData
    :properties="propertiesArray"
    :hobbies="hobbiesArray"
    :skills="skillsArray"
  ></PersonalData>
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

<style></style>
