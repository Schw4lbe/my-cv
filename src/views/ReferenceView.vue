<template>
  <h1>Referenzen</h1>
  <ReferenceContainer></ReferenceContainer>
</template>

<script>
import ReferenceContainer from "@/components/ReferenceContainer.vue";

export default {
  name: "ReferenceView",
  components: {
    ReferenceContainer,
  },
};
</script>

<style scoped>
h1 {
  margin: 2rem;
}
</style>
