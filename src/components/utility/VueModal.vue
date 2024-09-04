<template>
  <div class="modal-container">
    <div class="modal-image-wrapper">
      <h4 v-if="isImageLoaded" class="modal-header">{{ title }}</h4>
      <img
        :src="media"
        alt="demo"
        class="modal-gallery-image"
        id="modal-image"
        style="display: none"
      />
      <button
        v-if="isImageLoaded"
        class="btn-modal-close"
        @click="$emit('closeModal')"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div
        id="loading-animation-container"
        class="spinner"
        style="display: none"
      >
        <LoadingAnimation />
      </div>
    </div>
  </div>
</template>

<script>
import LoadingAnimation from "@/components/utility/LoadingAnimation";

export default {
  name: "VueModal",
  components: {
    LoadingAnimation,
  },

  data() {
    return {
      isImageLoaded: false,
    };
  },

  props: {
    title: String,
    media: String,
  },

  mounted() {
    this.loadImage();
  },

  methods: {
    loadImage() {
      const modalImage = document.getElementById("modal-image");
      const spinner = document.getElementById("loading-animation-container");
      spinner.style.display = "block";

      const img = new Image();
      img.src = this.media;
      img.onload = function () {
        spinner.style.display = "none";
        modalImage.src = img.src;
        modalImage.style.display = "block";
      };

      this.isImageLoaded = true;
    },
  },
};
</script>
