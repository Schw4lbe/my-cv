<template>
  <div class="outro-container">
    <p class="outro-content-main animate__animated animate__backInDown">
      {{ mainContent }}
    </p>

    <div
      v-for="(topic, index) in items"
      :key="index"
      class="outro-content animate__animated animate__backInDown"
    >
      <h5>{{ topic.title }}</h5>
      <ul class="animate__animated animate__backInDown">
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
    mainContent: String,
  },
};
</script>

<style scoped></style>
