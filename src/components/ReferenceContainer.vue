<template>
  <div class="reference-grid-container">
    <div class="reference-container">
      <div class="description-container">
        <h2 class="reference-header">{{ data.header }}</h2>
        <p class="reference-info">{{ data.content }}</p>
        <br />
        <h3>{{ data.subheader }}</h3>
        <ul>
          <li v-for="(note, index) in data.notes" :key="index">
            {{ note }}
          </li>
        </ul>
      </div>
      <div class="media-container">
        <img src="../assets/unity-demo.gif" alt="dummy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReferenceContainer",
  props: {
    data: Array,
  },
};
</script>
