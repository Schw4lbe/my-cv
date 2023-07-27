<template>
  <div class="loading-container">
    <div class="image-frame">
      <img class="img-animation" alt="picture" src="../assets/dummy.png" />
    </div>
    <LoadingScreen
      class="loading-header"
      header="Lebenslauf"
      subHeader="Jean-Pierre Häussler"
    />
  </div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  name: "LoadingView",
  components: {
    LoadingScreen,
  },
};
</script>
