<template>
  <div>
    <LoadingScreen header="Lebenslauf" subHeader="Jean-Pierre Häussler" />
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
