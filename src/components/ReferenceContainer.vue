<template>
  <div class="reference-grid-container">
    <div class="reference-container">
      <div class="description-container">
        <h2 class="reference-header">Game Development in Unity & C#</h2>
        <p class="reference-info">
          Meine Passion für Computerspiele hat mich dazu verleitet, mir mittels
          Unity Dokumentationen, C# Dokumentationen, Youtube Tutorials, Google
          und Chat GPT das Programmieren in C# auf Basis der Unity Engine selbst
          bei zu bringen.
          <br /><br />
          Das Freizeitprojekt betrachte ich als Work in Progress und wird von
          mir kontinuierlich weiter entwickelt.
        </p>
        <br />
        <h3>Randnotizen & Tech Stack:</h3>
        <ul>
          <li>Unity Editor & Unity Engine</li>
          <li>C# in Microsoft Visual Studio 2022</li>
          <li>Gameconcept in Markdown</li>
          <li>Item & Crafting Sprites samt Table</li>
        </ul>
      </div>
      <div class="media-container">
        <img src="../assets/unity-demo.gif" alt="dummy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReferenceContainer",
  props: {
    referenceData: Array,
  },
};
</script>
