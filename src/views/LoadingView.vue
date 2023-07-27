<template>
  <div>
    <LoadingScreen header="Lebenslauf" subHeader="Jean-Pierre Häussler" />
    <PersonalData></PersonalData>
  </div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen.vue";
import PersonalData from "@/components/PersonalData.vue";

export default {
  name: "LoadingView",
  components: {
    LoadingScreen,
    PersonalData,
  },
};
</script>
