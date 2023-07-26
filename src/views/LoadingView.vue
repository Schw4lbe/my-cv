<template>
  <div class="loading">
    <img alt="picture" src="../assets/jph.jpg" />
    <LoadingScreen header="Lebenslauf" subHeader="Jean-Pierre Häussler" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  name: "LoadingView",
  components: {
    LoadingScreen,
  },
};
</script>
<style scoped>
img {
  height: 65%;
  width: 65%;
}
</style>
