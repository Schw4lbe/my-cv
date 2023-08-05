<template>
  <div class="reference-wrapper">
    <div class="reference-data-container">
      <h1>Referenzen</h1>
      <AccordionReference>
        <ReferenceContainer />
      </AccordionReference>
    </div>
  </div>
</template>

<script>
import AccordionReference from "@/components/AccordionReference.vue";
import ReferenceContainer from "@/components/ReferenceContainer.vue";

export default {
  name: "ReferenceView",
  components: {
    AccordionReference,
    ReferenceContainer,
  },
};
</script>
