<template>
  <div class="modal-wrapper">
    <div @click="openModal" class="image-frame">
      <img class="image" :src="image" alt="dummy" />
      <div class="click-overlay">
        <span class="click-text">Vollbild mit einem Klick</span>
      </div>
    </div>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <img :src="image" alt="dummy" />
        <button @click="closeModal">Close Modal</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueModal",
  props: {
    image: String,
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

<style scoped>
.click-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.click-text {
  color: white;
  font-size: 1rem;
  text-align: center;
  width: 50%;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5rem;
  border-radius: 5px;
}

.modal-wrapper {
  cursor: pointer;
}

.image-frame {
  filter: grayscale(75%);
  transform: scale(1);
  transition: 0.3s;
}

.image-frame:hover {
  filter: grayscale(0%);
  transform: scale(1.01);
  transition: 0.3s;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
}

.modal-content {
  width: 90%;
  height: auto;
  padding: 20px;
  background: #222;
  border: 1px solid tomato;
}
</style>
