<template>
  <div class="loading-container">
    <div class="image-frame">
      <img class="img-animation" alt="picture" src="../assets/dummy.png" />
    </div>
    <div class="loading-header">
      <h1>{{ header }}</h1>
      <h2>{{ subHeader }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: {
    header: String,
    subHeader: String,
  },
};
</script>
