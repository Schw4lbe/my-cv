<template>
  <div class="ref-wrapper">
    <div class="ref-container">
      <div v-for="item in referenceData" :key="item.id" class="ref-item">
        <div class="grid-container">
          <h3 class="ref-header">{{ item.header }}</h3>
          <p class="ref-text">{{ item.text }}</p>
          <h4 class="ref-subheader">{{ item.subheader }}</h4>
          <ul class="ref-subtopics">
            <li
              v-for="(topic, index) in item.subtopics"
              :key="index"
              class="ref-topic"
            >
              {{ topic }}
            </li>
          </ul>
          <button class="ref-repo-btn">
            <a :href="item.link" class="repo-link">DUMMY</a>
          </button>
          <button v-if="item.link2" class="ref-repo-btn">
            <a :href="item.link2" class="repo-link">DUMMY</a>
          </button>
        </div>
        <div class="grid-container">
          <img :src="item.image" alt="reference image" class="ref-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reference",
  props: {
    referenceData: Array,
  },

  mounted() {
    console.log("referenceData:", this.referenceData);
  },
};
</script>
