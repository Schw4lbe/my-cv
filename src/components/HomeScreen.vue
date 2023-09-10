<template>
  <h1 class="page-title">Home</h1>
  <div class="home-container">
    <div class="home-header-container">
      <div class="home-image">
        <img src="@/assets/jph.jpg" alt="" />
      </div>
      <div class="home-header">
        <h1>{{ header }}</h1>
        <h2>{{ subHeader }}</h2>
      </div>
    </div>
    <div class="home-intro">
      <h2>{{ intro[0].header }}</h2>
      <p>{{ intro[0].text }}</p>
    </div>
    <div class="home-tech">
      <h3 class="tech-header">Online-CV Tech Stack:</h3>
      <div class="tech-container">
        <ul class="tech-list">
          <li v-for="(tech, index) in technologies" :key="index">
            <i :class="tech.icon"></i>{{ tech.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="home-data-container">
      <div class="home-props">
        <div class="properties">
          <h3 class="prop-header">Stärken:</h3>
          <ul>
            <li v-for="(prop, index) in props" :key="index">{{ prop }}</li>
          </ul>
        </div>
        <div class="hobbies">
          <h3 class="hobby-header">Hobbies:</h3>
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
export default {
  name: "HomeScreen",
  props: {
    header: String,
    subHeader: String,
    intro: Array,
    props: Array,
    hobbies: Array,
    technologies: Array,
  },
};
</script>
