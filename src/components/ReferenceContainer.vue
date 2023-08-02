<template>
  <div class="reference-grid-container">
    <div class="reference-container">
      <div class="description-container">
        <h3 class="reference-header">Header</h3>
        <p class="reference-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          eveniet eaque saepe eligendi ad. Commodi quasi corrupti fugit
          exercitationem tempora. Odio fugiat nulla harum id deserunt porro
          commodi voluptates consectetur. Nulla quibusdam veniam ex itaque dicta
          alias officia iure reiciendis quod asperiores. Illum magni odit
          quidem, qui cum cupiditate eveniet reiciendis omnis deserunt
          aspernatur. Dignissimos quisquam perferendis explicabo reprehenderit
          hic.
        </p>
      </div>
      <div class="media-container">
        <img src="../assets/skills-dummy.gif" alt="dummy" />
      </div>
    </div>
    <div class="reference-container">
      <div class="description-container">
        <h3 class="reference-header">Header</h3>
        <p class="reference-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          eveniet eaque saepe eligendi ad. Commodi quasi corrupti fugit
          exercitationem tempora. Odio fugiat nulla harum id deserunt porro
          commodi voluptates consectetur. Nulla quibusdam veniam ex itaque dicta
          alias officia iure reiciendis quod asperiores. Illum magni odit
          quidem, qui cum cupiditate eveniet reiciendis omnis deserunt
          aspernatur. Dignissimos quisquam perferendis explicabo reprehenderit
          hic.
        </p>
      </div>
      <div class="media-container">
        <img src="../assets/skills-dummy.gif" alt="dummy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReferenceContainer",
  props: {
    referenceData: Array,
  },
};
</script>

<style scoped>
.reference-grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.reference-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
}

.description-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.reference-info {
  text-align: left;
}

.media-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: auto;
  width: 100%;
  max-width: 90%;
}
</style>
