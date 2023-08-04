<template>
  <div class="loading-container">
    <div id="loading-header" class="">
      <h1>{{ header }}</h1>
      <h2>{{ subHeader }}</h2>
      <p>
        Hier kommt die info rein, warum und wie ich diese Seite erstellt habe
      </p>
    </div>
    <div class="image-frame">
      <img id="portrait" class="" alt="picture" src="../assets/jph.jpg" />
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
