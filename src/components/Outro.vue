<template>
  <div class="outro-container">
    <p class="outro-content-main animate__animated animate__backInDown">
      {{ mainContent }}
    </p>
    <div
      class="outro-follow-msg animate__animated animate__delay-1s animate__fadeIn"
    >
      <a :href="link" target="_blank">
        {{ followMsg
        }}<i
          class="fa-brands fa-github animate__infinite animate__animated animate__pulse"
        ></i>
      </a>
    </div>
    <div
      v-for="(topic, index) in items"
      :key="index"
      class="outro-content animate__animated animate__backInUp"
    >
      <h5>{{ topic.title }}</h5>
      <ul class="animate__animated animate__backInUp">
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
    followMsg: String,
    link: String,
  },

  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },
};
</script>
