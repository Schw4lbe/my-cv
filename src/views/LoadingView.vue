<template>
  <div class="loading">
    <MenuMain></MenuMain>
    <img alt="picture" src="../assets/dummy.png" />
    <LoadingScreen header="Lebenslauf" subHeader="Jean-Pierre Häussler" />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuMain from "@/components/MenuMain.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  name: "LoadingView",
  components: {
    LoadingScreen,
    MenuMain,
  },
};
</script>
<style scoped>
img {
  height: 65%;
  width: 65%;
}
</style>
