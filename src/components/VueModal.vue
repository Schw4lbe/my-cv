<template>
  <div class="modal-wrapper">
    <div @click="openModal" class="image-frame">
      <img class="image" :src="image" rel="preload" />
      <div class="click-overlay">
        <span class="click-text">{{ modalButtonText }}</span>
      </div>
    </div>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <div class="modal-control">
          <h3 class="modal-header">{{ modalHeader }}</h3>
          <button class="modal-close-button" @click="closeModal">
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
        </div>
        <img class="modal-image" :src="media" rel="preload" />
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
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
