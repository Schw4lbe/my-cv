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
    <div class="reference-container-reverse">
      <div class="media-container-reverse">
        <img src="../assets/skills-dummy.gif" alt="dummy" />
      </div>
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
    <div class="reference-container-reverse">
      <div class="media-container-reverse">
        <img src="../assets/skills-dummy.gif" alt="dummy" />
      </div>
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
  grid-template-columns: 1fr;
}

.reference-container,
.reference-container-reverse {
  display: grid;
  grid-template-columns: 5fr 7fr;
  padding: 1rem;
  border-top: 1px solid black;
  margin-bottom: 30px;
}

.reference-container-reverse {
  grid-template-columns: 7fr 5fr;
}

.reference-info {
  text-align: left;
}

.media-container,
.media-container-reverse {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.media-container-reverse {
  justify-content: flex-start;
}

h3 {
  padding: 1rem;
}

img {
  height: auto;
  width: 100%;
  max-width: 90%;
}
</style>
