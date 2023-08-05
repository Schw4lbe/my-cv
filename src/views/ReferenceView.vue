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
