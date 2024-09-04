<template>
  <div class="dev">
    <div class="image-container">
      <button id="loadImageButton" @click="onClickLoadImage">Load Image</button>
      <div id="loadingSpinner" class="spinner" style="display: none">
        Loading...
      </div>
      <img id="largeImage" style="display: none" alt="Large Image" />
    </div>
  </div>
</template>
<script>
import imgSrc from "../../assets/img/hp-kv-demo.gif";

export default {
  name: "DevComponent",

  methods: {
    onClickLoadImage() {
      const imgElement = document.getElementById("largeImage");
      const spinner = document.getElementById("loadingSpinner");

      spinner.style.display = "block";

      const img = new Image();
      img.src = imgSrc;

      img.onload = function () {
        spinner.style.display = "none";

        imgElement.src = img.src;
        imgElement.style.display = "block";
      };

      img.onerror = function () {
        spinner.style.display = "none";
        alert("Failed to load image.");
      };
    },
  },
};
</script>

<style scoped>
.spinner {
  font-size: 20px;
  color: #555;
}
</style>
