<template>
  <!-- <h3 class="page-title">Home</h3> -->
  <div class="home-container">
    <div class="home-header-container">
      <div class="home-image">
        <img src="@/assets/img/jph.jpg" alt="" />
      </div>
      <div class="home-header">
        <h1>{{ header }}</h1>
        <h2>{{ subHeader }}</h2>
      </div>
    </div>
    <div class="home-intro">
      <h2>{{ intro[0].header }}</h2>
      <p>{{ intro[0].text }}</p>
      <br />
      <br />
      <p>{{ intro[0].text2 }}</p>
    </div>
    <div class="home-tech">
      <h3 class="tech-header">{{ setIntroHeaderTechStack }}</h3>
      <div class="tech-container">
        <ul class="tech-list">
          <li v-for="(tech, index) in technologies" :key="index">
            <i :class="tech.icon"></i>{{ tech.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="home-testing">
      <h3 class="testing-header">{{ setIntroHeaderTesting }}</h3>
      <div class="testing-container">
        <ul class="testing-list">
          <li
            class="testing-list-item"
            v-for="(prop, index) in testing"
            :key="index"
          >
            <div class="testing-os-container">
              <i :class="prop.icon"></i>
              <span class="testing-os">{{ prop.os }} </span>
            </div>
            <div class="testing-browser-container">
              <i class="testing-browser-icon" :class="prop.iconbrowser"></i>
              <span class="testing-browser">{{ prop.browser }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="home-data-container">
      <div class="home-props">
        <div class="properties">
          <h3 class="prop-header">{{ setIntroHeaderStrength }}</h3>
          <ul>
            <li v-for="(prop, index) in props" :key="index">{{ prop }}</li>
          </ul>
        </div>
        <div class="hobbies">
          <h3 class="hobby-header">{{ setIntroHeaderHobbies }}</h3>
          <ul>
            <li v-for="(hobby, index) in hobbies" :key="index">
              {{ hobby }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeScreen",
  props: {
    header: String,
    subHeader: String,
    intro: Array,
    props: Array,
    testing: Array,
    hobbies: Array,
    technologies: Array,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    setIntroHeaderTechStack() {
      return this.$store.state.contentData[this.selectedLanguage]
        .introHeaderTechStack;
    },

    setIntroHeaderTesting() {
      return this.$store.state.contentData[this.selectedLanguage]
        .introHeaderTesting;
    },

    setIntroHeaderStrength() {
      return this.$store.state.contentData[this.selectedLanguage]
        .introHeaderStrength;
    },

    setIntroHeaderHobbies() {
      return this.$store.state.contentData[this.selectedLanguage]
        .introHeaderHobbies;
    },
  },
};
</script>
