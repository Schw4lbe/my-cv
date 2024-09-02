<template>
  <div class="home-container">
    <div class="home-header-container">
      <div class="home-image">
        <img src="@/assets/img/jph.jpg" alt="" />
      </div>
      <div class="home-header">
        <h2>{{ header }}</h2>
        <h3>{{ subHeader }}</h3>
      </div>
    </div>
    <div class="home-intro">
      <h3 class="intro-header">{{ intro[0].header }}</h3>
      <p>{{ intro[0].text }}</p>
      <p>{{ intro[0].text2 }}</p>
    </div>
    <div class="home-tech">
      <!-- <h3 class="tech-header">{{ setIntroHeaderTechStack }}</h3> -->
      <div class="tech-container">
        <ul class="tech-list">
          <li v-for="(tech, index) in technologies" :key="index">
            <i :class="tech.icon"></i>
            {{ tech.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  props: {
    header: String,
    subHeader: String,
    intro: Array,
    technologies: Array,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    setIntroHeaderTechStack() {
      return this.$store.state.contentData[this.selectedLanguage]
        .introHeaderTechStack;
    },
  },

  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>
