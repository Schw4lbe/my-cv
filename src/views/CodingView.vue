<template>
  <div class="coding-wrapper">
    <div class="coding-data-container">
      <h3 class="page-title">Coding Erfahrung</h3>
      <AccordionInfo :items="codingItems" />
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import AccordionInfo from "@/components/AccordionInfo.vue";
import Logo3 from "@/assets/img/logo-vivax-solution.jpg";
import Logo4 from "@/assets/img/logo-gfn.svg";

export default {
  name: "CodingView",
  components: {
    AccordionInfo,
  },

  // computed: {
  //   ...mapGetters(["selectedLanguage"]),

  //   codingItems() {
  //     return this.$store.state.contentData[this.selectedLanguage].codingItems;
  //   },
  // },

  data() {
    return {
      codingItems: [
        {
          id: "1",
          header: "Softwareentwicklung Frontend - Vivax Solution GmbH",
          period: "05/2022 - heute",
          subtopics: [
            "Entwicklung Webcomponents in vue.js mit TypeScript für conditional Rendering von JSON Schema",
            "Umfang: JavaScript, TypeScript, CSS, SCSS, HTML, JSON in PHP Storm & Visual Studio Code",
            "Planung, Konzept und Umsetzung adaptives SCSS Styling Framework für Kundenprojekte",
            "Verwendung Vue Property Decorator für erste Ansätze in objektorientierter Programmierung",
            "Erstellung Matrix und Durchführung Multi-Device Tests in Browserstack",
            "Anfertigung von Dokumenten Templates via Twig",
            "Bearbeitung und Bereitsstellung Bildmaterial Pixel- und Vektorgrafiken",
          ],
          success:
            "Erstellung Responsive Design & eigener Web Components für Online Bestellstrecke",
          logo: Logo3,
          media: "",
          link: "https://www.vivax-solution.de/",
        },
        {
          id: "2",
          header: "Zertifizierung JavaScript Developer - GFN GmbH",
          period: "12/2021 - 03/2022",
          subtopics: [
            "Einrichtung IDE, Visual Studio Code, Extensions, Npm Package Manager, JSON Config",
            "JavaScript (ES6) Syntax, Methoden, Arrays, Objekte, Destructuring, Helper Funktionen",
            "JavaScript DOM, Manipulation HTML & CSS, Events, Timing Funktionen",
            "Node.js & Express, Module, APIs, Websockets, CSV Anbindung, AJAX",
            "Einführung Test Driven Development (TDD) & Einstieg React",
          ],
          success:
            "Erfolgeicher Abschluss 11.03.2022 (88 / 100 Punkten - “gut”)",
          logo: Logo4,
          media: "",
          link: "https://www.gfn.de/",
        },
        {
          id: "3",
          header: "Zertifizierung Webdesigner - GFN GmbH",
          period: "10/2021 - 12/2021",
          subtopics: [
            "Einrichtung IDE, Visual Studio Code, Extensions, XAMPP",
            "Grundlagen Webdesign, HTML5 Syntax, barrierefreie Programmierung, Markdown, Emmet",
            "CSS3 & SCSS responsive Webdesign, Syntax, Herstellerpräfix, Partials, Breakpoints, Nesting",
            "Einbindung Bootstrap Libraries & Verwendung von Modulen in Projekten",
            "UI/UX Design, Erstellung App-Konzept in Figma",
          ],
          success:
            "Erfolgeicher Abschluss 10.12.2021 (90 / 100 Punkten - “sehr gut”)",
          logo: Logo4,
          media: "",
          link: "https://www.gfn.de/",
        },
      ],
    };
  },
};
</script>
