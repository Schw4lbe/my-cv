<template>
  <div class="modal-container">
    <div class="modal-image-wrapper">
      <h4 class="modal-header">{{ title }}</h4>
      <img :src="media" alt="demo" class="modal-gallery-image" />
      <button class="btn-modal-close" @click="$emit('closeModal')">
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueModal",

  props: {
    title: String,
    media: String,
  },
};
</script>
