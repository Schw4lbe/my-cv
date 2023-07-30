<template>
  <!-- <div class="readycheck">
    <ReadyCheck :inputs="startInputs"></ReadyCheck>
  </div> -->
  <div class="container">
    <LoadingScreen header="Lebenslauf" subHeader="Jean-Pierre Häussler" />
  </div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen.vue";
// import ReadyCheck from "@/components/ReadyCheck.vue";

export default {
  name: "LoadingView",
  components: {
    LoadingScreen,
    // ReadyCheck,
  },
  // data() {
  //   return {
  //     startInputs: [
  //       { label: "Tee oder Kaffee frisch aufgebrüht?" },
  //       { label: "Notizblock bereit?" },
  //       { label: "Die wichtigsten Personen sind anwesend?" },
  //     ],
  //   };
  // },
};
</script>
<style scoped>
.container {
  display: grid;
}
</style>
