<template>
  <div class="home-wrapper">
    <h1 class="home-title">Home</h1>
    <div class="home-container">
      <div class="home-header-container">
        <div class="home-header">
          <h1>{{ header }}</h1>
          <h2>{{ subHeader }}</h2>
        </div>
        <div class="home-image">
          <img src="../assets/jph.jpg" alt="" />
        </div>
      </div>
      <div class="home-content">
        <h2>Präambel</h2>
        <p>
          Dieser online Lebenslauf ist mit der Intention enstanden, meinen
          aktuellen Leistungsstand in der Frontend Entwicklung dar zu stellen.
          Zusammengefasst habe ich 6 Monate Weiterbildung und ein gutes Jahr
          Berufserfahrung sammeln können. Da dies ein recht überschaubarer
          Rahmen an Praxiserfahrung ist, möchte ich die Gelegenheit nutzen, mich
          mit bewegten Inhalten zu präsentieren.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeScreen",
  props: {
    header: String,
    subHeader: String,
  },
};
</script>
