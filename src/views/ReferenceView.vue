<template>
  <div class="reference-wrapper">
    <div class="reference-data-container">
      <h1>Referenzen</h1>
      <ReferenceContainer />
    </div>
  </div>
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
.reference-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #666;
}

.reference-data-container {
  width: 100%;
  max-width: 1920px;
}

h1 {
  margin: 2rem;
}
</style>
