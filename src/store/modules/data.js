// import demo img to lead to fullscreen demo
import img02a from "@/assets/img/homepage-demo.jpg";
import img03a from "@/assets/img/contactform-demo.jpg";
import img04a from "@/assets/img/csv-processing-demo.jpg";
import img05a from "@/assets/img/unity-demo.jpg";
import img06a from "@/assets/img/login-demo.jpg";
import img07a from "@/assets/img/online-cv-demo.jpg";
import img08a from "@/assets/img/php-login-prototype.jpg";
import img09a from "@/assets/img/store-demo.jpg";

// import gif for fullscreen demo
import img02 from "@/assets/img/homepage-demo.gif";
import img03 from "@/assets/img/contactform-demo.gif";
import img04 from "@/assets/img/csv-processing-demo.gif";
import img05 from "@/assets/img/unity-demo.gif";
import img06 from "@/assets/img/login-demo.gif";
import img07 from "@/assets/img/online-cv-demo.gif";
import img08 from "@/assets/img/php-login-prototype.gif";
import img09 from "@/assets/img/store-demo.gif";

export const data = {
  de: {
    skillData: [
      {
        lable: "Sprachen",
        description:
          "Nachfolgend eine Auflistung der Programmiersprachen die ich bereits beherrsche, zur Darstellung meines Leistungsstandes.",
        items: [
          {
            id: "2",
            icon: "fa-brands fa-css3-alt",
            name: "css 3",
            rating: "8",
          },
          { id: "1", icon: "fa-brands fa-html5", name: "html 5", rating: "9" },

          {
            id: "8",
            icon: "fa-brands fa-js",
            name: "javascript es6",
            rating: "7",
          },
          {
            id: "9",
            icon: "fa-brands fa-js",
            name: "javascript dom",
            rating: "6",
          },
          { id: "3", icon: "fa-brands fa-sass", name: "scss", rating: "8" },
          {
            id: "11",
            icon: "fa-brands fa-node-js",
            name: "node.js",
            rating: "4",
          },
          {
            id: "16",
            icon: "fa-brands fa-php",
            name: "PHP 8",
            rating: "4",
          },
          {
            id: "10",
            icon: "fa-solid fa-t",
            name: "typescript",
            rating: "5",
          },
        ],
      },
      {
        lable: "Frameworks & Libraries",
        description:
          "Frameworks & Libraries sind unerlässlich um produktiv zu sein und um das Rat nicht neu zu erfinden. Neben meinem Liebling, Vue.js nachfolgend eine Liste weitere Frameworks und Bibliotheken, mit denen ich sehr oft arbeite.",
        items: [
          {
            id: "14",
            icon: "fa-brands fa-vuejs",
            name: "vue js 2 & 3",
            rating: "8",
          },
          {
            id: "15",
            icon: "fa-brands fa-vuejs",
            name: "vuex + vue-router",
            rating: "6",
          },
          {
            id: "5",
            icon: "fa-solid fa-book",
            name: "vuetify",
            rating: "4",
          },
          {
            id: "4",
            icon: "fa-brands fa-bootstrap",
            name: "bootstrap",
            rating: "7",
          },
          {
            id: "35",
            icon: "fa-solid fa-dna",
            name: "animate.css",
            rating: "4",
          },
          {
            id: "6",
            icon: "fa-solid fa-q",
            name: "quasar",
            rating: "3",
          },
          { id: "12", icon: "fa-solid fa-e", name: "express", rating: "2" },
          { id: "13", icon: "fa-brands fa-react", name: "react", rating: "1" },
        ],
      },
      {
        lable: "Tools & Zubehör",
        description:
          "Auch Tools und Zubehör dürfen nicht fehlen. Mit den folgenden konnte ich bereits ausreichend Praxiserfahrung sammeln, um sie hier aufzuzählen",
        items: [
          {
            id: "18",
            icon: "fa-brands fa-microsoft",
            name: "visual studio code",
            rating: "8",
          },
          {
            id: "19",
            icon: "fa-brands fa-microsoft",
            name: "visual studio 2022",
            rating: "4",
          },
          {
            id: "20",
            icon: "fa-solid fa-code",
            name: "phpstorm",
            rating: "5",
          },
          {
            id: "15",
            icon: "fa-brands fa-vuejs",
            name: "vue devtools",
            rating: "5",
          },
          {
            id: "17",
            icon: "fa-regular fa-window-restore",
            name: "browserstack",
            rating: "6",
          },
          {
            id: "34",
            icon: "fa-brands fa-gulp",
            name: "gulp.js",
            rating: "2",
          },
          {
            id: "33",
            icon: "fa-brands fa-docker",
            name: "docker desktop",
            rating: "3",
          },
          {
            id: "30",
            icon: "fa-brands fa-github",
            name: "github (pages + ci-cd)",
            rating: "6",
          },
          {
            id: "31",
            icon: "fa-solid fa-n",
            name: "netlify (identity + cms + ci-cd)",
            rating: "4",
          },
          {
            id: "32",
            icon: "fa-solid fa-d",
            name: "decap cms",
            rating: "4",
          },
        ],
      },
    ],

    navbarItems: [
      {
        id: "item1",
        name: "Fachwissen",
        path: "/person",
      },
      {
        id: "item4",
        name: "Lebenslauf",
        path: "/carrer",
      },
      {
        id: "item5",
        name: "Referenzen",
        path: "/reference",
      },
      {
        id: "item6",
        name: "Schlusswort",
        path: "/outro",
      },
    ],

    buttonLinkText: "Homepage des Unternehmens",
    accordionOpenText: "aufklappen",
    accordionCollapseText: "zuklappen",
    referenceSuccessMsg: "Größter Erfolg: ",
    modalButtonText: "Demo ansehen",
    timelineDetails: "[ klick für mehr Infos ]",
    timelineBtnBackUp: "zurück zum Anfang",
    introHeader: "Lebenslauf",
    introHeaderTechStack: "Erstellt mit",
    introHeaderTesting: "Kompatibilität",
    introHeaderStrength: "Stärken",
    introHeaderHobbies: "Hobbies",

    introData: [
      {
        header: "Präambel",
        text: "Dieser online Lebenslauf ist mit der Intention entstanden, meinen aktuellen Leistungsstand in der Frontend Entwicklung darzustellen. Bewegte Bilder und echter Code sind aussagekräftiger als ein Schlichter Lebenslauf in PDF Format. Dieses Projekt ist mittels Eisnatz der folgenden Technologien entstanden.",
      },
    ],

    timelineDescription: [
      "... und welche Station kommt als nächstes?",
      "Einblicke in meinen Werdegang.",
    ],

    timelineItems: [
      {
        id: "1",
        header: "Freiberufliche Webentwicklung - Weiterbildung",
        period: "Juni 2023 - heute",
        subtopics: [
          "Freiberufliche Umsetzung Webprojekte, Beratung & Konzeptionierung",
          "Vertiefung Fachwissen und Aneignung neuer Fähigkeiten im Front- & Backend",
          "Verwendung neuer Technologien - siehe Schlusswort für mehr Details",
          "Besuch von diversen online Schulungen & Tutorials",
          "Schwerpunkt auf Backend Technologien insbesondere PHP 8",
          "Sammeln von Praxiserfahrung in prozeduraler- und objektorientierter PHP Entwicklung",
        ],
        success: "Umsetzung Diverser Webapplikationen",
        link: "",
      },
      {
        id: "2",
        header: "Softwareentwicklung Frontend - Vivax Solution GmbH",
        period: "Mai 2022 - Juni 2023",
        subtopics: [
          "Entwicklung Webcomponents in vue.js mit TypeScript für conditional Rendering von JSON Schema",
          "Umfang: JavaScript, TypeScript, CSS, SCSS, HTML, JSON in PHP Storm & Visual Studio Code",
          "Planung, Konzept und Umsetzung adaptives SCSS Styling Framework für Kundenprojekte",
          "Verwendung Vue Property Decorator für erste Ansätze in objektorientierter Programmierung",
          "Erstellung Matrix und Durchführung Multi-Device Tests in Browserstack",
          "Anfertigung von Dokumenten Templates via Twig",
          "Bearbeitung und Bereitstellung Bildmaterial Pixel- und Vektorgrafiken",
        ],
        success:
          "Erstellung Responsive Design & eigener Web Components für Online Bestellstrecke",
        link: "https://www.vivax-solution.de/",
      },
      {
        id: "3",
        header: "Zertifizierung JavaScript Developer - GFN GmbH",
        period: "Dezember 2021 - März 2022",
        subtopics: [
          "Einrichtung IDE, Visual Studio Code, Extensions, NPM Package Manager, JSON Config",
          "JavaScript (ES6) Syntax, Methoden, Arrays, Objekte, Destructuring, Helper Funktionen",
          "JavaScript DOM, Manipulation HTML & CSS, Events, Timing Funktionen",
          "Node.js & Express, Module, APIs, Websockets, CSV Anbindung, AJAX",
          "Einführung Test Driven Development (TDD) & Einstieg React",
        ],
        success: "Erfolgeicher Abschluss 11.03.2022 (88 / 100 Punkten - “gut”)",
        link: "https://www.gfn.de/",
      },
      {
        id: "4",
        header: "Zertifizierung Webdesigner - GFN GmbH",
        period: "Oktober 2021 - Dezember 2021",
        subtopics: [
          "Einrichtung IDE, Visual Studio Code, Extensions, XAMPP",
          "Grundlagen Webdesign, HTML5 Syntax, barrierefreie Programmierung, Markdown, Emmet",
          "CSS3 & SCSS responsive Webdesign, Syntax, Herstellerpräfix, Partials, Breakpoints, Nesting",
          "Einbindung Bootstrap Libraries & Verwendung von Modulen in Projekten",
          "UI/UX Design, Erstellung App-Konzept in Figma",
        ],
        success:
          "Erfolgeicher Abschluss 10.12.2021 (90 / 100 Punkten - “sehr gut”)",
        link: "https://www.gfn.de/",
      },
      {
        id: "5",
        header: "Besinnung & Neuorientierung",
        period: "Oktober 2020 - Oktober 2021",
        subtopics: [
          "Aufbau eines Twitch.tv Livestream Kanals (Affiliate Status), Live DJ-ing & Vj-ing",
          "Erste Einblicke Game Development C# auf Unity Engine",
          "Einarbeitung in Character Animation mittels Blender",
          "Eruierung möglicher Weiterbildungsmaßnahmen",
          "Austausch mit diversen Schulungsunternehmen",
        ],
        success:
          "Twitch Livestream vor knapp 1000 Viewern mit Schallplatten - Hosting durch bekannten Künstler",
        link: "",
      },
      {
        id: "6",
        header: "Microsoft Cloud Solution Visionary - straight solutions GmbH",
        period: "Juni 2020 - Oktober 2020",
        subtopics: [
          "Beratung & Konzeptionierung Microsoft 365 Cloud Lösungen",
          "Projektplanung, Projektleitung, Kalkulation und techn. Teilumsetzung",
          "Schulung Endkunde Schwerpunkt Microsoft Teams, SharePoint, MS Office",
        ],
        success:
          "Einführung Microsoft Teams Telefonie Lösung (Niederlassungen in USA & Deutschland)",
        link: "https://www.straight-solutions.com/",
      },
      {
        id: "7",
        header: "Head of Sales - straight solutions GmbH",
        period: "Januar 2018 - Juni 2020",
        subtopics: [
          "Leitung selbstorganisiertes Drei Mann Vertriebsteam",
          "Neuverteilung interner Verantwortungsbereiche & Kernkompetenzen",
          "vertriebliche Verantwortung für Microsoft 365 & HP PSG",
        ],
        success:
          "Teilprojektleitung Windows 10 Deployment 27 Standorten / 500 Arbeitsplätzen",
        link: "https://www.straight-solutions.com/",
      },
      {
        id: "8",
        header: "IT Sales Consultant - straight solutions GmbH",
        period: "Oktober 2016 - Januar 2018",
        subtopics: [
          "Restrukturierung & Ausbau bestehender Vertriebsprozesse",
          "Lizenzberatung Microsoft Volume Licensing & Microsoft Cloud Transition",
          "Pflege Warenwirtschaft sowie Abwicklung von Angebot bis Rechnung",
          "Aufbau / Pflege von Hersteller- & Partnerbeziehungen",
        ],
        success:
          "Aufnahme in Microsoft managed Partner Programm (unternehmensweit)",
        link: "https://www.straight-solutions.com/",
      },
      {
        id: "9",
        header: "Eventmanagement & Musiker - Münchner Grammophon e. K.",
        period: "Oktober 2014 - September 2016",
        subtopics: [
          "Planung & Organisation von Veranstaltungen 50 – 1.200 Teilnehmer",
          "Tätigkeit als Schallplattenunterhalter in diversen Lokalitäten in München",
          "Vernetzung von Veranstaltungskollektiven in Deutschland / Österreich",
          "Abschluss von Kooperationen zwischen Betreibern & Dienstleistern",
          "Werbetätigkeiten & Bearbeitung von Onlinepräsenzen",
        ],
        success:
          "Drei Fragezeichen Festival Feierwerk München (ca. 1.200 Besucher)",
        link: "",
      },
      {
        id: "10",
        header:
          "Consultant Software & Service Volume Licensing - Sycor IQ Solutions GmbH",
        period: "Juli 2012 - September 2014",
        subtopics: [
          "Betreuung Bestandskunden (Microsoft Volume Licensing / HP PSG)",
          "Neukundenakquise (outbound & Microsoft Leads)",
          "Systembetreuung & interne Abwicklung (Einkauf/Verkauf)",
          "Etablierung Adobe Volume Licensing (TLP, CLP, VIP), Umsetzung, Abschluss & Schulung Fokus auf Kreativprodukte",
        ],
        success:
          "Projektleitung, Umsetzung, Schulung Adobe Redaktionssystem (USA & EU)",
        link: "https://www.iq-gmbh.de/",
      },
      {
        id: "11",
        header: "Ausbildung IT-Systemkaufmann - IQ GmbH",
        period: "Oktober 2009 - Juni 2012",
        subtopics: [
          "Inside Sales Umgang mit Warenwirtschaft und Geschäftsprozessen",
          "Zuarbeit bei Microsoft Software Asset Management Projekten",
          "Neukundengewinnung (inbound) samt Projektbegleitung",
          "Führung von Erstgesprächen, Qualifikation von Neukunden",
        ],
        success:
          "Begleitende Einführung von Microsoft BPOS in einem kleinen Speditionsunternehmen",
        link: "https://www.iq-gmbh.de/",
      },
    ],

    referenceDescription: "Einblicke in meine bestehenden Projekte.",

    referenceArray: [
      {
        id: "1",
        hasMedia: true,
        header: "CSV-Processing Tool",
        subheader: "Tech Stack:",
        subtopics: [
          "VUE.JS 3, PHP 8, SCSS, Vuetify, Chart Kick, Apache, MySQL, Gulp, Docker",
          "ESLint, Prettier, LiveSASS Compiler, Visual Studio Code, Postman",
          "Anwendung des MVC (Model View Controller) Prinzips",
          "Verwendung von Best Practice Ansätzen für Datei- & Contentvalidierung",
        ],
        text: "Erstellung einer Konzeptarbeit für ein Unternehmen. Frontend bestehend aus VUE.JS, Vuetify & Chartkick. Backend in PHP 8 ohne Framework enthält eine Suche & Paginierung. Demo in Docker ausführbar.",
        image: img04a,
        media: img04,
        link: "https://github.com/Schw4lbe/CSV-Processing",
        link2: "",
      },
      {
        id: "2",
        hasMedia: true,
        header: "Dummy Homepage",
        subheader: "Tech Stack:",
        subtopics: [
          "VUE.JS 3, HTML, SCSS, JavaScript ES6, JSON-Server",
          "VUE Router, Bootstrap via CDN, ESLint, Prettier",
          "Visual Studio Code, LiveSASS Compiler",
          "JSON-Server als Fake Backend",
        ],
        text: "Im Lauf der Zeit habe ich mir eine Dummy Homepage aufgebaut. Sie ist eine Spielwiese für mich, um neue Designs zu testen. Die Dummy Page gibt mir die Möglichkeit schnell und effizient zu testen und zu lernen.",
        image: img02a,
        media: img02,
        link: "https://github.com/Schw4lbe/homepage",
        link2: "",
      },
      {
        id: "3",
        hasMedia: true,
        header: "Online Lebenslauf",
        subheader: "Tech Stack & Details:",
        subtopics: [
          "Für Details siehe Home Verzeichnis unter Präambel & Tech Stack.",
        ],
        text: "Responsive online Lebenslauf als Single Page Application für Bewerbungszwecke. Sprachen: Deutsch & Englisch. Gern auf mobilen Endgeräten testen, ich freue mich über Feedback und Verbesserungsvorschläge.",
        image: img07a,
        media: img07,
        link: "https://github.com/Schw4lbe/my-cv",
        link2: "",
      },
      {
        id: "4",
        hasMedia: true,
        header: "Kontakt Formular",
        subheader: "Tech Stack & Details:",
        subtopics: [
          "VUE.JS 3, HTML, CSS, JavaScript ES6, JSON-Server",
          "Verifzierung Telefonnummer und E-Mail Adresse via Regex",
          "Eigener Captcha samt Honeypot",
          "Captcha Lösungswort & Honeypot durch CSS manipuliert",
        ],
        text: "Erstellung eigenes Kontaktformular zur Festigung neu erworbenem Wissens, sowie kreative Spielwiese für dieverse Styling Ideen.",
        image: img03a,
        media: img03,
        link: "https://github.com/Schw4lbe/vue-contactform",
        link2: "",
      },
      {
        id: "6",
        hasMedia: true,
        header: "Node.js Login Prototype",
        subheader: "Tech Stack",
        subtopics: [
          "Visual Studio Code, Node.js, JavaScript, EJS, Nodemon",
          "Express samt Express Session & Express Flash",
          "dotenv für Umgebungsvariablen",
          "bcrypt zum verschlüsseln der Passwörter",
          "passport & passport-local als Bibliothek für Anmeldedaten",
          "method override zum überschreiben von z.B. POST durch DELETE",
        ],
        text: "Rudimentärer Login Prototype stark vereinfacht zur Anwendung neuer Technologien und Erweiterung des Fachwissens. Lokale Variable zur Ablage der Benutzer ist in einer Produktivumgebung durch eine Datenbank zu ersetzen.",
        image: img06a,
        media: img06,
        link: "https://github.com/Schw4lbe/login-prototype",
        link2: "",
      },
      {
        id: "7",
        hasMedia: true,
        header: "PHP Login Prototype",
        subheader: "Tech Stack & Info",
        subtopics: [
          "Visual Studio Code, PHP 8, XAMPP, MySQL, Apache",
          "Einführung in PHP Syntax",
          "Anbindung an MySQL Datenbank in XAMPP",
          "Erstellung Data Table in phpMyAdmin",
          "Einführung in Code Sanitizing & Basis Security Features",
        ],
        text: "Erste Praxiserfahrung im Umgang mit PHP in Verbindung mit XAMPP (MySQL, Apache). Darstellung Prototype samt Datentransfer in MySQL. Erarbeitung Best-Practice Ansätzen für Passwort Hashing, Erzeugung & Verwaltung Session Variablen, htmlspecialchars & Code Sanitizing.",
        image: img08a,
        media: img08,
        link: "https://github.com/Schw4lbe/PHP-login-prototype",
        link2: "",
      },
      {
        id: "8",
        hasMedia: true,
        header: "PHP / VUE Online Store",
        subheader: "Tech Stack & Info",
        subtopics: [
          "Visual Studio Code, PHP 8, VUE.JS, VUEX, XAMPP, MySQL, Apache",
          "Erstellung PHP Backend samt Interaction mit MySQL Datenbanken",
          "PHP Backend bestehend aus Benutzerlogin, Produktverwaltung, Bestellerfassung",
          "Anwendung des MVC (Model View Controller) Prinzips",
          "Frontend Erstellung samt Styling in VUE.JS & SCSS",
          "Erstes Projekt mit VUE.JS in Verbindung mit PHP 8",
        ],
        text: "Erste Umsetzung & Verbinung von VUE.JS & PHP zusammen mit XAMPP (MySQL, Apache). Erschaffung eines fiktiven Online Shops samt Nutzerverwaltung. Einarbeitung in objektorentierte PHP Entwicklung, Transfer von Daten zwischen VUE.JS, PHP und SQL.",
        image: img09a,
        media: img09,
        link: "https://github.com/Schw4lbe/vue-php-store-prototype-frontend",
        link2: "https://github.com/Schw4lbe/vue-php-store-prototype-backend",
      },
      {
        id: "9",
        hasMedia: true,
        header: "Spiele Entwicklung",
        subheader: "Randnotizen & Tech Stack:",
        subtopics: [
          "Unity Editor & Unity Engine",
          "C# in Microsoft Visual Studio 2022",
          "Gameconcept in Markdown",
          "Item & Crafting Sprites samt Table",
        ],
        text: "Meine Passion für Computerspiele hat mich dazu verleitet, mir mittels Unity Dokumentationen, C# Dokumentationen, Youtube Tutorials, Google und Chat GPT das Programmieren in C# auf Basis der Unity Engine selbst beizubringen. Das Freizeitprojekt betrachte ich als Work in Progress und wird von mir kontinuierlich weiterentwickelt.",
        image: img05a,
        media: img05,
        link: "",
        link2: "",
      },
    ],

    outroHeader: "Abschließende Worte...",
    outroMainContent:
      "Vielen Dank, dass Sie sich die Zeit genommen haben, mein Werk zu betrachten. Ich freue mich jederzeit über Feedback und Fragen zu meinen Projekten.",
    outroItems: [
      {
        title: "Quellenangaben:",
        content: [
          "developer.mozilla.org",
          "stackoverflow.com",
          "codepen.io",
          "getbootstrap.com",
          "fontawesome.com",
          "vuejs.org",
          "gulpjs.com",
          "github.com",
          "youtube.com",
        ],
      },
    ],
  },

  en: {
    skillData: [
      {
        lable: "Languages",
        description:
          "Below is a list of programming languages that I already master, to showcase my proficiency level.",
        items: [
          {
            id: "2",
            icon: "fa-brands fa-css3-alt",
            name: "css 3",
            rating: "8",
          },
          { id: "1", icon: "fa-brands fa-html5", name: "html 5", rating: "9" },

          {
            id: "8",
            icon: "fa-brands fa-js",
            name: "javascript es6",
            rating: "7",
          },
          {
            id: "9",
            icon: "fa-brands fa-js",
            name: "javascript dom",
            rating: "6",
          },
          { id: "3", icon: "fa-brands fa-sass", name: "scss", rating: "8" },
          {
            id: "11",
            icon: "fa-brands fa-node-js",
            name: "node.js",
            rating: "4",
          },
          {
            id: "16",
            icon: "fa-brands fa-php",
            name: "PHP 8",
            rating: "4",
          },
          {
            id: "10",
            icon: "fa-solid fa-t",
            name: "typescript",
            rating: "5",
          },
        ],
      },
      {
        lable: "Frameworks & Libraries",
        description:
          "Frameworks & libraries are essential for being productive and not reinventing the wheel. Besides my favorite, Vue.js, here is a list of other frameworks and libraries that I work with daily.",
        items: [
          {
            id: "14",
            icon: "fa-brands fa-vuejs",
            name: "vue js 2 & 3",
            rating: "8",
          },
          {
            id: "15",
            icon: "fa-brands fa-vuejs",
            name: "vuex + vue-router",
            rating: "6",
          },
          {
            id: "5",
            icon: "fa-solid fa-book",
            name: "vuetify",
            rating: "4",
          },
          {
            id: "4",
            icon: "fa-brands fa-bootstrap",
            name: "bootstrap",
            rating: "7",
          },
          {
            id: "35",
            icon: "fa-solid fa-dna",
            name: "animate.css",
            rating: "4",
          },
          {
            id: "6",
            icon: "fa-solid fa-q",
            name: "quasar",
            rating: "3",
          },
          { id: "12", icon: "fa-solid fa-e", name: "express", rating: "2" },
          { id: "13", icon: "fa-brands fa-react", name: "react", rating: "1" },
        ],
      },
      {
        lable: "Tools & Utility",
        description:
          "Tools and accessories are also indispensable. I've gained enough practical experience with the following to list them here.",
        items: [
          {
            id: "18",
            icon: "fa-brands fa-microsoft",
            name: "visual studio code",
            rating: "8",
          },
          {
            id: "19",
            icon: "fa-brands fa-microsoft",
            name: "visual studio 2022",
            rating: "4",
          },
          {
            id: "20",
            icon: "fa-solid fa-code",
            name: "phpstorm",
            rating: "5",
          },
          {
            id: "15",
            icon: "fa-brands fa-vuejs",
            name: "vue devtools",
            rating: "5",
          },
          {
            id: "17",
            icon: "fa-regular fa-window-restore",
            name: "browserstack",
            rating: "6",
          },
          {
            id: "34",
            icon: "fa-brands fa-gulp",
            name: "gulp.js",
            rating: "2",
          },
          {
            id: "33",
            icon: "fa-brands fa-docker",
            name: "docker desktop",
            rating: "3",
          },
          {
            id: "30",
            icon: "fa-brands fa-github",
            name: "github (pages + ci-cd)",
            rating: "6",
          },
          {
            id: "31",
            icon: "fa-solid fa-n",
            name: "netlify (identity + cms + ci-cd)",
            rating: "4",
          },
          {
            id: "32",
            icon: "fa-solid fa-d",
            name: "decap cms",
            rating: "4",
          },
        ],
      },
    ],

    navbarItems: [
      {
        id: "item1",
        name: "Skills",
        path: "/person",
      },
      {
        id: "item4",
        name: "Carrer",
        path: "/carrer",
      },
      {
        id: "item5",
        name: "Reference",
        path: "/reference",
      },
      {
        id: "item6",
        name: "Outro",
        path: "/outro",
      },
    ],

    buttonLinkText: "Company website",
    accordionOpenText: "expand",
    accordionCollapseText: "collapse",
    referenceSuccessMsg: "Greatest success: ",
    modalButtonText: "Show Demo",
    timelineDetails: "[ click for details ]",
    timelineBtnBackUp: "back to start",
    introHeader: "Curriculum Vitae",
    introHeaderTechStack: "Tech Stack",
    introHeaderTesting: "Compatibility",
    introHeaderStrength: "Strengths",
    introHeaderHobbies: "Hobbies",

    introData: [
      {
        header: "Preamble",
        text: "This online resume was created with the intention of showcasing my current skill level in frontend development. Animated images and real code are more illustrative than a simple resume in PDF format. This project was created using the following technologies.",
      },
    ],

    timelineDescription: [
      "... and which station is coming next?",
      "Insights into my career.",
    ],

    timelineItems: [
      {
        id: "1",
        header: "Freelance Web Development - Further Education",
        period: "Jun 2023 - today",
        subtopics: [
          "Freelance implementation of web projects, consulting, and conceptualization",
          "Improvement of expertise and acquisition of new skills in front- and back-end development.",
          "Use of new technologies - see the concluding outro for more details.",
          "Participation in various online trainings & tutorials.",
          "Focus on backend technologies, especially PHP 8",
          "Gathering practical experience in procedural and object-oriented PHP development",
        ],
        success: "Implementation of various web applications",
        link: "",
      },
      {
        id: "2",
        header: "Software Development Frontend - Vivax Solution GmbH",
        period: "Mar 2022 - Jun 2023",
        subtopics: [
          "Development of web components in Vue.js with TypeScript for conditional rendering of JSON-Schema.",
          "Scope: JavaScript, TypeScript, CSS, SCSS, HTML, JSON in PHP Storm & Visual Studio Code.",
          "Planning, concept, and implementation of an adaptive SCSS styling framework for customer projects.",
          "Use of Vue Property Decorator for initial approaches in object-oriented programming.",
          "Creation of a matrix and execution of multi-device tests in Browserstack.",
          "Designing document templates via Twig.",
          "Editing and provision of image material, both pixel and vector graphics.",
        ],
        success:
          "Creation of responsive design & custom web components for online ordering process.",
        link: "https://www.vivax-solution.de/",
      },
      {
        id: "3",
        header: "Certified JavaScript Developer - GFN GmbH",
        period: "Dec 2021 - Mar 2022",
        subtopics: [
          "Setup IDE, Visual Studio Code, Extensions, Npm Package Manager, JSON Config.",
          "JavaScript (ES6) syntax, methods, arrays, objects, destructuring, helper functions.",
          "JavaScript DOM, manipulation of HTML & CSS, events, timing functions.",
          "Node.js & Express, modules, APIs, websockets, CSV integration, AJAX.",
          "Introduction to Test Driven Development (TDD) & getting started with React.",
        ],
        success:
          "Successful completion on 11th of March 2022 (88 out of 100 points - “good”).",
        link: "https://www.gfn.de/",
      },
      {
        id: "4",
        header: "Certified Webdesigner - GFN GmbH",
        period: "Dec 2021 - Dec 2021",
        subtopics: [
          "Setup IDE, Visual Studio Code, Extensions, XAMPP.",
          "Basics of Web design, HTML5 syntax, accessible programming, Markdown, Emmet.",
          "CSS3 & SCSS responsive Web design, syntax, vendor prefixes, partials, breakpoints, nesting.",
          "Integration of Bootstrap libraries & use of modules in projects.",
          "UI/UX Design, creation of app concept in Figma.",
        ],
        success:
          "Successful completion on 10th of December 2021 (90 / 100 Punkten - “very good”)",
        link: "https://www.gfn.de/",
      },
      {
        id: "5",
        header: "Reflection & Reorientation",
        period: "Dec 2020 - Dec 2021",
        subtopics: [
          "Setting up a Twitch.tv livestream channel (Affiliate Status), Live DJ-ing & VJ-ing",
          "Initial insights into game development with C# on Unity Engine",
          "Introduction to character animation using Blender",
          "Evaluation of possible further training measures",
          "Exchange with various training companies",
        ],
        success:
          "Twitch livestream for nearly 1,000 viewers with vinyl records - Hosting by a well-known artist.",
        link: "",
      },
      {
        id: "6",
        header: "Microsoft Cloud Solution Visionary - straight solutions GmbH",
        period: "Jun 2020 - Dec 2020",
        subtopics: [
          "Consulting & Conceptualization of Microsoft 365 Cloud Solutions",
          "Project planning, project management, calculation, and technical partial implementation",
          "End-customer training with a focus on Microsoft Teams, SharePoint, MS Office",
        ],
        success:
          "Implementation of Microsoft Teams Telephony Solution (branches in the USA & Germany)",
        link: "https://www.straight-solutions.com/",
      },
      {
        id: "7",
        header: "Head of Sales - straight solutions GmbH",
        period: "Jan 2018 - Jun 2020",
        subtopics: [
          "Management of a self-organized three-man sales team",
          "Redistribution of internal areas of responsibility & core competencies",
          "Sales responsibility for Microsoft 365 & HP PSG",
        ],
        success:
          "Partial project management of Windows 10 deployment at 27 locations / 500 workstations",
        link: "https://www.straight-solutions.com/",
      },
      {
        id: "8",
        header: "IT Sales Consultant - straight solutions GmbH",
        period: "Sep 2016 - Jan 2018",
        subtopics: [
          "Restructuring & expansion of existing sales processes",
          "Licensing consultation for Microsoft Volume Licensing & Microsoft Cloud Transition",
          "Maintenance of inventory management as well as processing from quotation to invoice",
          "Establishment/maintenance of manufacturer & partner relationships",
        ],
        success:
          "Admission to the Microsoft managed Partner Program (company-wide)",
        link: "https://www.straight-solutions.com/",
      },
      {
        id: "9",
        header: "Event Management & Musician - Munich Gramophone e. K.",
        period: "Sep 2014 - Sep 2016",
        subtopics: [
          "Planning & organization of events with 50 – 1,200 participants",
          "Worked as a vinyl record entertainer in various venues in Munich",
          "Networking of event collectives in Germany / Austria",
          "Finalization of cooperations between operators & service providers",
          "Advertising activities & editing of online presences",
        ],
        success:
          "Drei Fragezeichen Festival Feierwerk Munich (ca. 1.200 participants)",
        link: "",
      },

      {
        id: "10",
        header:
          "Consultant Software & Service Volume Licensing - Sycor IQ Solutions GmbH",
        period: "Jul 2012 - Sep 2014",
        subtopics: [
          "Support of existing customers (Microsoft Volume Licensing / HP PSG)",
          "Acquisition of new customers (outbound & Microsoft Leads)",
          "System support & internal processing (purchasing/selling)",
          "Establishment of Adobe Volume Licensing (TLP, CLP, VIP), implementation, completion & training with a focus on creative products",
        ],
        success:
          "Project management, implementation, training for the Adobe editorial system (USA & EU)",
        link: "https://www.iq-gmbh.de/",
      },
      {
        id: "11",
        header: "Training as IT Sales Consultant - IQ GmbH",
        period: "Oct 2009 - Jun 2012",
        subtopics: [
          "Inside Sales dealing with merchandise management and business processes",
          "Collaboration on Microsoft Software Asset Management projects",
          "Acquisition of new customers (inbound) with project support",
          "Conducting initial discussions, qualification of new customers",
        ],
        success:
          "Supporting the introduction of Microsoft BPOS in a small logistics company",
        link: "https://www.iq-gmbh.de/",
      },
    ],

    referenceDescription: "Let's have some insights in my lates projects.",

    referenceArray: [
      {
        id: "1",
        hasMedia: true,
        header: "CSV-Processing Tool",
        subheader: "Tech Stack:",
        subtopics: [
          "VUE.JS 3, PHP 8, SCSS, Vuetify, Chart Kick, Apache, MySQL, Gulp, Docker",
          "ESLint, Prettier, LiveSASS Compiler, Visual Studio Code, Postman",
          "Application of the MVC (Model View Controller) principle",
          "Use of best practice approaches for file and content validation",
        ],
        text: "Creation of a concept work for a company. Frontend consists of VUE.JS, Vuetify, and Chartkick. Backend in PHP 8 with no framework. Backend includes search and pagination. Demo executable in Docker.",
        image: img04a,
        media: img04,
        link: "https://github.com/Schw4lbe/vue-weatherapp",
        link2: "",
      },
      {
        id: "2",
        hasMedia: true,
        header: "Dummy Homepage",
        subheader: "Tech Stack:",
        subtopics: [
          "VUE.JS 3, HTML, SCSS, JavaScript ES6, JSON-Server",
          "VUE Router, Bootstrap via CDN, ESLint, Prettier",
          "Visual Studio Code, LiveSASS Compiler",
          "JSON-Server as a fake backend",
        ],
        text: "Over time, I have developed a dummy homepage. It serves as a playground for me to test new designs. The dummy page gives me the opportunity to test and learn quickly and efficiently.",
        image: img02a,
        media: img02,
        link: "https://github.com/Schw4lbe/homepage",
        link2: "",
      },
      {
        id: "3",
        hasMedia: true,
        header: "Online CV",
        subheader: "Tech Stack & Details:",
        subtopics: [
          "For details, see the Home directory under Preamble & Tech Stack.",
        ],
        text: "Responsive online resume as a Single Page Application for job application purposes. Languages: German & English. Feel free to test on mobile devices, I welcome feedback and suggestions for improvement.",
        image: img07a,
        media: img07,
        link: "https://github.com/Schw4lbe/my-cv",
        link2: "",
      },
      {
        id: "4",
        hasMedia: true,
        header: "Contact Form",
        subheader: "Tech Stack & Details:",
        subtopics: [
          "VUE.JS 3, HTML, CSS, JavaScript ES6, JSON-Server",
          "Phone number and email address verification via Regex",
          "Own captcha with honeypot",
          "Captcha solution word & honeypot manipulated by CSS",
        ],
        text: "Creation of a custom contact form to consolidate newly acquired knowledge and as a creative playground for various styling ideas.",
        image: img03a,
        media: img03,
        link: "https://github.com/Schw4lbe/vue-contactform",
        link2: "",
      },
      {
        id: "6",
        hasMedia: true,
        header: "Node.js Login Prototype",
        subheader: "Tech Stack",
        subtopics: [
          "Visual Studio Code, Node.js, JavaScript, EJS, Nodemon",
          "Express along with Express Session & Express Flash",
          "dotenv for environment variables",
          "bcrypt for encrypting & hashing passwords",
          "passport & passport-local as a library for credentials",
          "method override to overwrite eg. POST with DELETE",
        ],
        text: "A rudimentary login prototype, greatly simplified for applying new technologies and expanding technical knowledge. Local variable as user Array should be replaced in production.",
        image: img06a,
        media: img06,
        link: "https://github.com/Schw4lbe/login-prototype",
        link2: "",
      },
      {
        id: "7",
        hasMedia: true,
        header: "PHP Login Prototype",
        subheader: "Tech Stack & Info",
        subtopics: [
          "Visual Studio Code, PHP 8, XAMPP, MySQL, Apache",
          "Introduction to PHP Syntax",
          "Connecting to a MySQL Database in XAMPP",
          "Creating a Data Table in phpMyAdmin",
          "Introduction to Code Sanitizing & Basic Security Features",
        ],
        text: "Initial practical experience in using PHP in conjunction with XAMPP (MySQL, Apache). Demonstration prototype including data transfer to MySQL. Development of best-practice approaches for password hashing, use of session variables, htmlspecialchars & code sanitizing.",
        image: img08a,
        media: img08,
        link: "https://github.com/Schw4lbe/PHP-login-prototype",
        link2: "",
      },
      {
        id: "8",
        hasMedia: true,
        header: "PHP / VUE Online Store",
        subheader: "Tech Stack & Info",
        subtopics: [
          "Visual Studio Code, PHP 8, VUE.JS, VUEX, XAMPP, MySQL, Apache",
          "Creation of PHP Backend including interaction with MySQL databases",
          "PHP Backend consisting of user login, product management, and order processing",
          "Application of the MVC (Model View Controller) principle",
          "Frontend creation and styling in VUE.JS & SCSS",
          "First project using VUE.JS in conjunction with PHP 8",
        ],
        text: "First implementation and connection of VUE.JS & PHP along with XAMPP (MySQL, Apache). Creation of a fictitious online store including user management. Training in object-oriented PHP development, transfer of data between VUE.JS, PHP, and SQL.",
        image: img09a,
        media: img09,
        link: "https://github.com/Schw4lbe/vue-php-store-prototype-frontend",
        link2: "https://github.com/Schw4lbe/vue-php-store-prototype-backend",
      },
      {
        id: "9",
        hasMedia: true,
        header: "Game Development",
        subheader: "Side Notes & Tech Stack:",
        subtopics: [
          "Unity Editor & Unity Engine",
          "C# in Microsoft Visual Studio 2022",
          "Game concept in Markdown",
          "Item & Crafting Sprites with table",
        ],
        text: "My passion for computer games led me to teach myself programming in C# based on the Unity Engine using Unity documentation, C# documentation, YouTube tutorials, Google, and Chat GPT. I consider this hobby project as a work in progress and continue to develop it regularly.",
        image: img05a,
        media: img05,
        link: "",
        link2: "",
      },
    ],

    outroHeader: "Some closing arguments...",
    outroMainContent:
      "I am always happy to receive feedback on my projects and am willing to address questions in detail. In the following, I would like to describe what was new to me in creating this online resume, where the biggest challenges were, and what I would like to do differently or better in future projects.",
    outroItems: [
      {
        title: "Sources:",
        content: [
          "developer.mozilla.org",
          "stackoverflow.com",
          "codepen.io",
          "getbootstrap.com",
          "fontawesome.com",
          "learn.microsoft.com",
          "vuejs.org",
          "gulpjs.com",
          "github.com",
          "youtube.com",
        ],
      },
    ],
  },

  footerItems: [
    {
      link: "https://www.linkedin.com/in/jean-pierre-h%C3%A4ussler-66019118a/",
      icon: "fa-brands fa-linkedin",
    },
    {
      link: "https://www.xing.com/profile/JeanPierre_Haeussler/cv",
      icon: "fa-brands fa-square-xing",
    },
    {
      link: "https://github.com/Schw4lbe",
      icon: "fa-brands fa-square-github",
    },
  ],

  techData: [
    { name: "VUE.JS 3", icon: "fa-brands fa-vuejs" },
    { name: "HTML 5", icon: "fa-brands fa-html5" },
    { name: "SCSS", icon: "fa-brands fa-sass" },
    {
      name: "JavaScript",
      icon: "fa-brands fa-square-js",
    },
    { name: "VS Code", icon: "fa-brands fa-microsoft" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    { name: "FontAwesome", icon: "fa-solid fa-font-awesome" },
    { name: "animate.css", icon: "fa-solid fa-dna" },
    { name: "Gulp", icon: "fa-brands fa-gulp" },
    { name: "Autoprefixer", icon: "fa-brands fa-autoprefixer" },
    { name: "PostCSS", icon: "fa-brands fa-css3-alt" },
    { name: "GitHub", icon: "fa-brands fa-github" },
    { name: "netlify", icon: "fa-solid fa-n" },
  ],
};
