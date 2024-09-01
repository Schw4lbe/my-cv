<template>
  <div class="modal-wrapper">
    <div @click="openModal" class="image-frame">
      <img class="image" :src="image" rel="preload" />
      <div class="click-overlay">
        <span class="click-text">{{ modalButtonText }}</span>
      </div>
    </div>
    <div class="modal" v-if="showModal">
      <div class="modal-content" style="border-radius: 0px">
        <div class="modal-control">
          <h3 class="modal-header">{{ modalHeader }}</h3>
          <button class="modal-close-button" @click="closeModal">
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
        </div>
        <div v-if="loading" class="Loader"></div>
        <img
          v-show="!loading"
          class="modal-image"
          :src="media"
          @load="imageLoaded"
          rel="preload"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VueModal",
  props: {
    image: String,
    media: String,
    modalHeader: String,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    modalButtonText() {
      return this.$store.state.contentData[this.selectedLanguage]
        .modalButtonText;
    },
  },

  data() {
    return {
      showModal: false,
      loading: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.loading = true;
    },
    closeModal() {
      this.showModal = false;
    },
    imageLoaded() {
      setTimeout(() => {
        this.loading = false;
      }, 500); // slight delay to ensure the loading animation is visible
    },
  },
};
</script>

<style scoped>
.Loader {
  position: relative;
  z-index: 501;
  border: 6px solid #f3f3f3; /* Light grey */
  border-top: 6px solid #555555; /* Dark grey */
  border-radius: 50%;
  width: 55px;
  height: 55px;
  animation: spin 0.8s linear infinite;
  box-sizing: border-box;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
