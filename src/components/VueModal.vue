<template>
  <div class="modal-wrapper">
    <div @click="openModal" class="image-frame">
      <img class="image" :src="image" />
      <div class="click-overlay">
        <span class="click-text">Vollbild mit Klick</span>
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
        <img class="modal-image" :src="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueModal",
  props: {
    image: String,
    modalHeader: String,
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
