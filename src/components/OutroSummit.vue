<template>
  <div class="outro-container">
    <h3>{{ subHeader }}</h3>
    <p>
      Hier kommt noch rein, was ich gelernt habe, was neu für mich war, wo meine
      Herausforderungen lagen, was ich besser möchen würde und was mir am
      meisten Spaß gemacht hat, sowie eine Quellenangabe der genutzen foren,
      informationsplattformen und co. Composition API nutzen und vollständig
      begreifen.
    </p>
    <p>Login logisch von app.vue trennen</p>

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
  name: "OutroSummit",
  props: {
    items: Array,
    subHeader: String,
  },
};
</script>

<style scoped></style>
