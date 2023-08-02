<template>
  <h1>Selbstständigkeit</h1>
  <AccordionInfo :items="freelanceItems"></AccordionInfo>
</template>

<script>
import AccordionInfo from "@/components/AccordionInfo.vue";

export default {
  name: "FreelanceView",
  components: {
    AccordionInfo,
  },
  data() {
    return {
      freelanceItems: [
        {
          id: "1",
          header: "Besinnung & Neuorientierung",
          period: "10/2020 - 10/2021",
          subtopics: [
            "Aufbau eines Twitch.tv Livestream Kanals (Affiliate Status), Live DJ-ing & Vj-ing",
            "Erste Einblicke Game Development C-Sharp auf Unity Engine",
            "Einarbeitung in Character Animation mittels Blender",
            "Eruierung möglicher Weiterbildungsmaßnahmen",
            "Austausch mit diversen Schulungsunternehmen",
          ],
          success:
            "Twitch Livestream vor knapp 1000 Viewern mit Schallplatten - Hosting durch bekannten Künstler",
          logo: "",
          media: "",
        },
        {
          id: "2",
          header: "Eventmanagement & Musiker - Münchner Grammophon e. K.",
          period: "10/2014 - 09/2016",
          subtopics: [
            "Planung & Organisation von Veranstaltungen 50 – 1.200 Teilnehmer",
            "Tätigkeit als Schallplattenunterhalter in diversen Lokalitäten in München",
            "Vernetzung von Veranstaltungskollektiven in Deutschland / Österreich",
            "Abschluss von Kooperationen zwischen Betreibern & Dienstleistern",
            "Werbetätigkeiten & Bearbeitung von Onlinepräsenzen",
          ],
          success:
            "Drei Fragezeichen Festival Feierwerk München (ca. 1.200 Besucher)",
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
