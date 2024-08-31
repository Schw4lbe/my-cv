<template>
  <div class="dev-container">
    <h2>DEV View</h2>
    <div class="dev-render-container">
      <DevComponent />
    </div>
  </div>
</template>

<script>
import DevComponent from "@/components/DevComponent.vue";

export default {
  name: "DevView",
  components: {
    DevComponent,
  },
};
</script>
