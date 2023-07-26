<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/jph.jpg" />
    <LoadingScreen msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  name: "HomeView",
  components: {
    LoadingScreen,
  },
};
</script>
