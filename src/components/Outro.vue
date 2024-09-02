<template>
  <div class="outro-container">
    <!-- <h3>{{ subHeader }}</h3> -->
    <p class="outro-content-main">{{ mainContent }}</p>

    <div v-for="(topic, index) in items" :key="index" class="outro-content">
      <h5>{{ topic.title }}</h5>
      <ul>
        <li v-for="(item, index) in topic.content" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Outro",
  props: {
    items: Array,
    subHeader: String,
    mainContent: String,
  },
};
</script>

<style scoped></style>
