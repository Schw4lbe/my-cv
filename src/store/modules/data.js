// Media:
import Logo3 from "@/assets/img/logo-vivax-solution.jpg";
import Logo4 from "@/assets/img/logo-gfn.svg";
import Logo5 from "@/assets/img/logo-tapemate.png";
import Logo6 from "@/assets/img/logo-grammophon.png";

import img01 from "@/assets/img/kundenprojekt-demo.gif";
import img02 from "@/assets/img/homepage-demo.gif";
import img03 from "@/assets/img/contactform-demo.gif";
import img04 from "@/assets/img/weatherapp-demo.gif";
import img05 from "@/assets/img/unity-demo.gif";

export const data = {
  de: {
    introContent: [
      "Warum eigentlich ein online Lebenslauf?",
      "Weil ich zeigen möchte, was ich kann.",
    ],
    readyCheckContent: {
      header: "Alle Vorbereitungen getroffen?",
      content: [
        {
          label: "Tee oder Kaffee frisch aufgebrüht?",
          icon: "fa-solid fa-mug-hot",
        },
        {
          label: "Notizblock bereit?",
          icon: "fa-sharp fa-solid fa-pen-to-square",
        },
        {
          label: "Die wichtigsten Personen sind anwesend?",
          icon: "fa-solid fa-people-group",
        },
      ],
      buttonText: "Los geht's!",
    },
    menuItems: [
      {
        id: "item1",
        name: "Fachwissen",
        path: "/person",
      },
      {
        id: "item2",
        name: "Vertrieb",
        path: "/sales",
      },
      {
        id: "item3",
        name: "Webentwicklung",
        path: "/coding",
      },
      {
        id: "item4",
        name: "Selbstständigkeit",
        path: "/freelance",
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
    timeoutContent: {
      header: "Ein Fehler ist aufgetreten!",
      message:
        "Die Anmeldeinformationen sind falsch. Bitte versuchen sie es in ",
      message2: " Sekunden erneut.",
    },
    errorMsg: "Login Server nicht verfügbar.",
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
        link: "https://www.vivax-solution.de/",
      },
      {
        id: "2",
        header: "Zertifizierung JavaScript Developer - GFN GmbH",
        period: "12/2021 - 03/2022",
        subtopics: [
          "Einrichtung IDE, Visual Studio Code, Extensions, NPM Package Manager, JSON Config",
          "JavaScript (ES6) Syntax, Methoden, Arrays, Objekte, Destructuring, Helper Funktionen",
          "JavaScript DOM, Manipulation HTML & CSS, Events, Timing Funktionen",
          "Node.js & Express, Module, APIs, Websockets, CSV Anbindung, AJAX",
          "Einführung Test Driven Development (TDD) & Einstieg React",
        ],
        success: "Erfolgeicher Abschluss 11.03.2022 (88 / 100 Punkten - “gut”)",
        logo: Logo4,
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
        link: "https://www.gfn.de/",
      },
    ],
    freelanceItems: [
      {
        id: "1",
        header: "Besinnung & Neuorientierung",
        period: "10/2020 - 10/2021",
        subtopics: [
          "Aufbau eines Twitch.tv Livestream Kanals (Affiliate Status), Live DJ-ing & Vj-ing",
          "Erste Einblicke Game Development C# auf Unity Engine",
          "Einarbeitung in Character Animation mittels Blender",
          "Eruierung möglicher Weiterbildungsmaßnahmen",
          "Austausch mit diversen Schulungsunternehmen",
        ],
        success:
          "Twitch Livestream vor knapp 1000 Viewern mit Schallplatten - Hosting durch bekannten Künstler",
        logo: Logo5,
        media: "",
        link: "https://soundcloud.com/tape-mate",
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
        logo: Logo6,
        media: "",
        link: "https://soundcloud.com/muenchner-grammophon",
      },
    ],
    referenceArray: [
      {
        id: "01",
        name: "Wetter APP",
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
        id: "02",
        name: "Dummy Homepage",
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
        name: "Kontakt Formular",
        content: {
          text: "Erstellung eigenes Kontaktformular zur Festigung neu erworbenem Wissens, sowie kreative Spielwiese für dieverse Styling Ideen.",
          subheader: "Tech Stack & Details:",
          notes: [
            "VUE.JS 3, HTML, SCSS, JavaScript ES6, JSON-Server",
            "Verifzierung Telefonnummer und E-Mail Adresse via Regex",
            "Eigener Captcha samt Honeypot",
            "Captcha Lösungswort & Honeypot durch CSS manipuliert",
          ],
          img: img03,
        },
      },
      {
        id: "04",
        name: "Kundenprojekt",
        content: {
          text: "Kundenprojekt für Stadtwerke Lauterbach. Umsetzung einer online Bestellstrecke mittels VUE.JS 2.x, TypeScript, SCSS & JSON-Schema.",
          subheader: "Tech Stack & Herausforderungen:",
          notes: [
            "VUE.JS 2.x, TypeScript, JSON-Schema",
            "EDI: Visual Studio Code & PHP Storm",
            "genannte Technologien waren Neuland",
            "Kompatibilität für Geräte der letzten 6 Jahre",
            "Komplette Anwendung läuft in einem IFrame",
          ],
          img: img01,
        },
      },
      {
        id: "05",
        name: "Game Development",
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
    referenceSubHeader:
      "Skala von 1 (Grundwissen) bis 10 (Experte). Bemessen an Praxiserfahrung.",
  },
  en: {
    introContent: [
      "What's the purpose for the online CV?",
      "Because I want to prove my skills.",
    ],
    readyCheckContent: {
      header: "Are we all set?",
      content: [
        {
          label: "Tea or coffee freshly brewed?",
          icon: "fa-solid fa-mug-hot",
        },
        {
          label: "Is your notepad at hand?",
          icon: "fa-sharp fa-solid fa-pen-to-square",
        },
        {
          label: "Are the essential participants present?",
          icon: "fa-solid fa-people-group",
        },
      ],
      buttonText: "Off we go!",
    },
    menuItems: [
      {
        id: "item1",
        name: "Skills",
        path: "/person",
      },
      {
        id: "item2",
        name: "Sales",
        path: "/sales",
      },
      {
        id: "item3",
        name: "Development",
        path: "/coding",
      },
      {
        id: "item4",
        name: "Freelancer",
        path: "/freelance",
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
    timeoutContent: {
      header: "An Error occurred!",
      message: "Your login information is wrong. Please try again in ",
      message2: " seconds.",
    },

    errorMsg: "Login Server not available.",
    codingItems: [
      {
        id: "1",
        header: "Software Development Frontend - Vivax Solution GmbH",
        period: "05/2022 - today",
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
        logo: Logo3,
        link: "https://www.vivax-solution.de/",
      },
      {
        id: "2",
        header: "Certified JavaScript Developer - GFN GmbH",
        period: "12/2021 - 03/2022",
        subtopics: [
          "Setup IDE, Visual Studio Code, Extensions, Npm Package Manager, JSON Config.",
          "JavaScript (ES6) syntax, methods, arrays, objects, destructuring, helper functions.",
          "JavaScript DOM, manipulation of HTML & CSS, events, timing functions.",
          "Node.js & Express, modules, APIs, websockets, CSV integration, AJAX.",
          "Introduction to Test Driven Development (TDD) & getting started with React.",
        ],
        success:
          "Successful completion on 11th of March 2022 (88 out of 100 points - “good”).",
        logo: Logo4,
        link: "https://www.gfn.de/",
      },
      {
        id: "3",
        header: "Certified Webdesigner - GFN GmbH",
        period: "10/2021 - 12/2021",
        subtopics: [
          "Setup IDE, Visual Studio Code, Extensions, XAMPP.",
          "Basics of Web design, HTML5 syntax, accessible programming, Markdown, Emmet.",
          "CSS3 & SCSS responsive Web design, syntax, vendor prefixes, partials, breakpoints, nesting.",
          "Integration of Bootstrap libraries & use of modules in projects.",
          "UI/UX Design, creation of app concept in Figma.",
        ],
        success:
          "Successful completion on 10th of December 2021 (90 / 100 Punkten - “very good”)",
        logo: Logo4,
        link: "https://www.gfn.de/",
      },
    ],
    freelanceItems: [
      {
        id: "1",
        header: "Reflection & Reorientation",
        period: "10/2020 - 10/2021",
        subtopics: [
          "Setting up a Twitch.tv livestream channel (Affiliate Status), Live DJ-ing & VJ-ing",
          "Initial insights into game development with C# on Unity Engine",
          "Introduction to character animation using Blender",
          "Evaluation of possible further training measures",
          "Exchange with various training companies",
        ],
        success:
          "Twitch livestream for nearly 1,000 viewers with vinyl records - Hosting by a well-known artist.",
        logo: Logo5,
        media: "",
        link: "https://soundcloud.com/tape-mate",
      },
      {
        id: "2",
        header: "Event Management & Musician - Munich Gramophone e. K.",
        period: "10/2014 - 09/2016",
        subtopics: [
          "Planning & organization of events with 50 – 1,200 participants",
          "Worked as a vinyl record entertainer in various venues in Munich",
          "Networking of event collectives in Germany / Austria",
          "Finalization of cooperations between operators & service providers",
          "Advertising activities & editing of online presences",
        ],
        success:
          "Drei Fragezeichen Festival Feierwerk Munich (ca. 1.200 participants)",
        logo: Logo6,
        media: "",
        link: "https://soundcloud.com/muenchner-grammophon",
      },
    ],
    referenceArray: [
      {
        id: "01",
        name: "Weather APP",
        content: {
          text: "For practice in integrating and handling APIs, as well as in writing Node.js, I followed several YouTube tutorials. Besides this application, I also created a small chatbot and a task manager. The application is based on the OpenWeatherAPI.",
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
        id: "02",
        name: "Dummy Homepage",
        content: {
          text: "Over the past few months, I have set up a dummy homepage. Whenever I discover a new technology or want to test a design, I can refer back to this build. The dummy page allows me to test and learn quickly and efficiently.",
          subheader: "Tech Stack:",
          notes: [
            "VUE.JS 3, HTML, SCSS, JavaScript ES6, JSON-Server",
            "VUE Router, Bootstrap via CDN, ESLint, Prettier",
            "Visual Studio Code, LiveSASS Compiler",
            "JSON-Server as fake Backend",
          ],
          img: img02,
        },
      },
      {
        id: "03",
        name: "Contact Form",
        content: {
          text: "Creation of my own contact form to reinforce newly acquired knowledge, as well as a creative playground for various styling ideas.",
          subheader: "Tech Stack & Details:",
          notes: [
            "VUE.JS 3, HTML, SCSS, JavaScript ES6, JSON-Server",
            "Verification of phone number and email address via Regex",
            "Own Captcha along with Honeypot",
            "Captcha solution word & Honeypot manipulated through CSS",
          ],
          img: img03,
        },
      },
      {
        id: "04",
        name: "Costumer project",
        content: {
          text: "Client project for Stadtwerke Lauterbach. Implementation of an online ordering process using VUE.JS 2.x, TypeScript, SCSS & JSON-Schema.",
          subheader: "Tech Stack & Challenge:",
          notes: [
            "VUE.JS 2.x, TypeScript, JSON-Schema",
            "EDI: Visual Studio Code & PHP Storm",
            "mentioned technologies were uncharted territory",
            "compatibility for devices from the last 6 years",
            "entire application runs within an iFrame",
          ],
          img: img01,
        },
      },
      {
        id: "05",
        name: "Game Development",
        content: {
          text: "My passion for computer games led me to teach myself programming in C# based on the Unity Engine using Unity documentation, C# documentation, YouTube tutorials, Google, and Chat GPT. I consider this hobby project a work in progress and continue to develop it consistently.",
          subheader: "Sidenotes & Tech Stack:",
          notes: [
            "Unity Editor & Unity Engine",
            "C# in Microsoft Visual Studio 2022",
            "Game concept in Markdown",
            "Item & Crafting Sprites along with Table",
          ],
          img: img05,
        },
      },
    ],
    referenceSubHeader:
      "Scale from 1 (basic knowledge) to 10 (expert). Measured by practical experience.",
  },
  serverMsg: "...logging in.",
  navbarItems: [
    {
      link: "https://www.linkedin.com/in/jean-pierre-h%C3%A4ussler-66019118a/",
      icon: "fa-brands fa-linkedin",
    },
    {
      link: "https://www.xing.com/profile/JeanPierre_Haeussler/cv",
      icon: "fa-brands fa-square-xing",
    },
    {
      link: "https://github.com/TapeMate",
      icon: "fa-brands fa-square-github",
    },
    {
      link: "https://soundcloud.com/tape-mate",
      icon: "fa-brands fa-soundcloud",
    },
  ],
  skillsArray: [
    { id: "1", icon: "fa-brands fa-html5", name: "html 5", rating: "9" },
    { id: "2", icon: "fa-brands fa-css3-alt", name: "css 3", rating: "8" },
    { id: "3", icon: "fa-brands fa-sass", name: "scss", rating: "8" },
    {
      id: "4",
      icon: "fa-brands fa-bootstrap",
      name: "bootstrap",
      rating: "7",
    },
    {
      id: "5",
      icon: "fa-solid fa-q",
      name: "quasar",
      rating: "3",
    },
    {
      id: "6",
      icon: "fa-brands fa-uikit",
      name: "ux / ui design",
      rating: "5",
    },
    {
      id: "7",
      icon: "fa-brands fa-js",
      name: "javascript es6",
      rating: "7",
    },
    {
      id: "8",
      icon: "fa-brands fa-js",
      name: "javascript dom",
      rating: "6",
    },
    {
      id: "9",
      icon: "fa-solid fa-t",
      name: "typescript",
      rating: "2",
    },
    {
      id: "10",
      icon: "fa-brands fa-node-js",
      name: "node.js",
      rating: "3",
    },
    { id: "11", icon: "fa-solid fa-e", name: "express", rating: "1" },
    { id: "12", icon: "fa-brands fa-react", name: "react", rating: "2" },
    {
      id: "13",
      icon: "fa-brands fa-vuejs",
      name: "vue js 2 & 3",
      rating: "7",
    },
    {
      id: "14",
      icon: "fa-brands fa-vuejs",
      name: "vuex",
      rating: "1",
    },
    {
      id: "15",
      icon: "fa-regular fa-window-restore",
      name: "browserstack",
      rating: "6",
    },
    {
      id: "16",
      icon: "fa-brands fa-microsoft",
      name: "visual studio code",
      rating: "8",
    },
    {
      id: "17",
      icon: "fa-brands fa-microsoft",
      name: "visual studio 2022",
      rating: "4",
    },
    {
      id: "18",
      icon: "fa-solid fa-code",
      name: "phpstorm",
      rating: "5",
    },
  ],
};
