// Media:
import Logo3 from "@/assets/img/logo-vivax-solution.jpg";
import Logo4 from "@/assets/img/logo-gfn.svg";
import Logo5 from "@/assets/img/logo-tapemate.png";
import Logo6 from "@/assets/img/logo-grammophon.png";

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
};
