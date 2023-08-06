<template>
  <div class="reference-wrapper">
    <div class="reference-data-container">
      <h1 class="page-title">Referenzen</h1>
      <AccordionReference :items="itemData" />
    </div>
  </div>
</template>

<script>
import AccordionReference from "@/components/AccordionReference.vue";
import img01 from "@/assets/kundenprojekt-demo.gif";
import img02 from "@/assets/homepage-demo.gif";
import img03 from "@/assets/contactform-demo.gif";
import img04 from "@/assets/weatherapp-demo.gif";
import img05 from "@/assets/unity-demo.gif";

export default {
  name: "ReferenceView",
  components: {
    AccordionReference,
  },
  data() {
    return {
      itemData: [
        {
          id: "01",
          name: "Kundenprojekt - Stadtwerke Lauterbach / Design Bestellstrecke",
          content: {
            text: "Im Rahmen eines Kundenprojektes wurde ich damit beauftragt, a uf Basis von SCSS und VUE.JS 2.x ein dynamisches Styling für VUE Webcomponents zu erstellen. Die Webcomponents sind über ein JSON-Schema mittels VUE JS Frontend im Shadow DOM gerendert.",
            subheader: "Tech Stack & Herausforderungen:",
            notes: [
              "VUE.JS 2.x, TypeScript, JSON-Schema, PHP Backend",
              "Editoren / EDI: Visual Studio Code & PHP Storm",
              "Beinahe alle Technologien waren Neuland für mich",
              "Kompatibilität für Geräte der letzten 6 Jahre",
              "Komplette Anwendung läuft in einem IFrame",
            ],
            img: img01,
          },
        },
        {
          id: "02",
          name: "Dummy Homepage - private Spielwiese zum Lernen & Testen",
          content: {
            text: "Im Lauf der letzten Monate habe ich mir eine Dummy Homepage aufgebaut. Wenn ich eine neue Technologie für mich entdecke oder ein Design testen möchte, kann auf diesen Build zurückgreifen. Die Dummy Page gibt mir die Möglichkeit schnell und effizient zu testen und lernen.",
            subheader: "Tech Stack:",
            notes: [
              "VUE.JS 3, HTML, SCSS, JavaScript ES6, JSON-Server",
              "VUE Router, Bootstrap via CDN, ESLint, Prettier",
              "Visual Studio Code, LiveSASS Compiler",
              "JSON-Server als Fake Backend",
            ],
            img: img02,
          },
        },
        {
          id: "03",
          name: "Kontakt Formular - Bestandteil der Dummy Homepage",
          content: {
            text: "Inspiriert von CodePen.IO und Stylings auf der battle.net Webpage, habe ich ein eigenes Kontaktformular mit zusätzlichen Features aufgebaut. Ziel hierbei war es mehr Praxiserfahrung mit VUE.JS zu erlangen und gleichzeitig eigene grafische Gestaltungen 1 zu 1 um zu setzen. Des weiteren habe ich ein kleines eigenes Captcha integriert, welches ebenfalls als VUE Webcomponent angelegt ist.",
            subheader: "Tech Stack & Details:",
            notes: [
              "VUE.JS 3, HTML, SCSS, JavaScript ES6, JSON-Server",
              "VUE Router, ESLint, Prettier, Visual Studio Code, LiveSASS Compiler",
              "Eingabekontrolle der Textfelder, Mindestlänge, Uppercase",
              "Verifzierung Telefonnummer und E-Mail Adresse via Regex",
              "Echtzeitabgleich der Mailadressen",
              "Eigener Captcha samt Honeypot",
              "Captcha Lösungswort durch CSS manipuliert",
              "Honeypot mit CSS für User versteckt",
            ],
            img: img03,
          },
        },
        {
          id: "04",
          name: "Wetter APP - Youtube Tutorial aufgewertet mit eigenen Animationen",
          content: {
            text: "Zur Übung in der Einbindung und im Umgang von API's als auch im Schreiben von Node.js, habe ich mehrere Youtube Tutorials vollzogen. Neben dieser Anwendung habe ich zudem einen kleinen Chatbot und einen Taskmanager erstellt. Die Anwendung basiert auf der OpenWeatherAPI.",
            subheader: "Tech Stack:",
            notes: [
              "VUE.JS 3, HTML, CSS, JavaScript ES6, Node.js, Express",
              "VUE Router, ESLint, Prettier, Visual Studio Code",
              "OpenWeatherAPI: https://openweathermap.org",
            ],
            img: img04,
          },
        },
        {
          id: "05",
          name: "Game Development in Unity & C#",
          content: {
            text: "Meine Passion für Computerspiele hat mich dazu verleitet, mir mittels Unity Dokumentationen, C# Dokumentationen, Youtube Tutorials, Google und Chat GPT das Programmieren in C# auf Basis der Unity Engine selbst bei zu bringen. Das Freizeitprojekt betrachte ich als Work in Progress und wird von mir kontinuierlich weiter entwickelt.",
            subheader: "Randnotizen & Tech Stack:",
            notes: [
              "Unity Editor & Unity Engine",
              "C# in Microsoft Visual Studio 2022",
              "Gameconcept in Markdown",
              "Item & Crafting Sprites samt Table",
            ],
            img: img05,
          },
        },
      ],
    };
  },
};
</script>
