<template>
  <div class="sales-wrapper">
    <div class="sales-data-container">
      <h1 class="page-title">Sales Erfahrung</h1>
      <AccordionInfo :items="salesItems" />
    </div>
  </div>
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
          header:
            "Microsoft Cloud Solution Visionary - straight solutions GmbH",
          period: "06/2020 - 10/2020",
          subtopics: [
            "Beratung & Konzeptionierung Microsoft 365 Cloud Lösungen",
            "Projektplanung, Projektleitung, Kalkulation und techn. Teilumsetzung",
            "Schulung Endkunde Schwerpunkt Microsoft Teams, SharePoint, MS Office",
          ],
          success:
            "Einführung Microsoft Teams Telefonie Lösung (Niederlassungen in USA & Deutschland)",
          logo: Logo1,
          media: "",
        },
        {
          id: "2",
          header: "Head of Sales - straight solutions GmbH",
          period: "01/2018 - 05/2020",
          subtopics: [
            "Leitung selbstorganisiertes Drei Mann Vertriebsteam",
            "Neuverteilung interner Verantwortungsbereiche & Kernkompetenzen",
            "vertriebliche Verantwortung für Microsoft 365 & HP PSG",
          ],
          success:
            "Teilprojektleitung Windows 10 Deployment 27 Standorten / 500 Arbeitsplätzen",
          logo: "",
          media: "",
        },
        {
          id: "3",
          header: "IT Sales Consultant - straight solutions GmbH",
          period: "10/2016 - 12/2017",
          subtopics: [
            "Restrukturierung & Ausbau bestehender Vertriebsprozesse",
            "Lizenzberatung Microsoft Volume Licensing & Microsoft Cloud Transition",
            "Pflege Warenwirtschaft sowie Abwicklung von Angebot bis Rechnung",
            "Aufbau / Pflege von Hersteller- & Partnerbeziehungen",
          ],
          success:
            "Aufnahme in Microsoft managed Partner Programm (unternehmensweit)",
          logo: "",
          media: "",
        },
        {
          id: "4",
          header:
            "Consultant Software & Service Volume Licensing - Sycor IQ Solutions GmbH",
          period: "07/2012 - 09/2014",
          subtopics: [
            "Betreuung Bestandskunden (Microsoft Volume Licensing / HP PSG)",
            "Neukundenakquise (outbound & Microsoft Leads)",
            "Systembetreuung & interne Abwicklung (Einkauf/Verkauf)",
            "Etablierung Adobe Volume Licensing (TLP, CLP, VIP), Umsetzung, Abschluss & Schulung Fokus auf Kreativprodukte",
          ],
          success:
            "Projektleitung, Umsetzung, Schulung Adobe Redaktionssystem (USA & EU)",
          logo: "",
          media: "",
        },
        {
          id: "5",
          header:
            "Ausbildung IT-Systemkaufmann (IHK) - IQ GmbH (später Sycor IQ Solutions GmbH)",
          period: "10/2009 - 06/2012",
          subtopics: [
            "Inside Sales Umgang mit Warenwirtschaft und Geschäftsprozessen",
            "Zuarbeit bei Microsoft Software Asset Management Projekten",
            "Neukundengewinnung (inbound) samt Projektbegleitung",
            "Führung von Erstgesprächen, Qualifikation von Neukunden",
          ],
          success:
            "Begleitende Einführung von Microsoft BPOS in einem kleinen Speditionsunternehmen",
          logo: "",
          media: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.sales-data-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
}
</style>
