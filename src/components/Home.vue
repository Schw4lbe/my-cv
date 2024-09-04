<template>
  <div class="home-container">
    <div class="home-header-container">
      <div class="home-image animate__animated animate__fadeIn">
        <img src="@/assets/img/jph.jpg" alt="profile image" />
      </div>
      <div class="home-header animate__animated animate__fadeIn">
        <h2>{{ header }}</h2>
        <h3>{{ subHeader }}</h3>
      </div>
    </div>
    <div class="home-intro">
      <h3 class="intro-header animate__animated hidden">
        {{ intro[0].header }}
      </h3>
      <p class="intro-text animate__animated hidden">{{ intro[0].text }}</p>
    </div>
    <div class="home-tech animate__animated hidden">
      <div class="tech-container">
        <ul class="tech-list">
          <li
            class="tech-list-item animate__animated hidden"
            v-for="(tech, index) in technologies"
            :key="index"
          >
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

    this.assignAnimations();
  },

  methods: {
    assignAnimations() {
      const subheader = document.querySelector(".intro-header");
      const text = document.querySelector(".intro-text");
      const tech = document.querySelector(".home-tech");
      const items = document.querySelectorAll(".tech-list-item");
      setTimeout(() => {
        subheader.classList.remove("hidden");
        subheader.classList.add("animate__fadeIn");
        text.classList.remove("hidden");
        text.classList.add("animate__fadeIn");
        tech.classList.remove("hidden");
        tech.classList.add("animate__fadeIn");

        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.remove("hidden");
            item.classList.add("animate__fadeIn");
          }, 100 * index);
        });
      }, 500);
    },
  },
};
</script>
