<template>
  <div class="data-container">
    <div class="skill-data-container">
      <div v-for="skill in skills" :key="skill.id" class="skill-container">
        <i :class="skill.icon" class="skill-icon"></i>
        <span class="skill-name">{{ skill.name }}</span>

        <div class="progress-bar">
          <div
            :style="{
              width: getProgressWidth(skill.rating) + '%',
              backgroundColor: setProgressBarColor(skill.rating),
            }"
            class="progress"
          ></div>
        </div>
        <span class="skill-rating">{{ skill.rating }} / 10</span>
      </div>
      <h3>
        Skala von 1 (Grundwissen) bis 10 (Experte). Bemessen an Praxiserfahrung.
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalData",
  props: {
    skills: Array,
  },
  data() {
    return {
      colors: ["#adffad", "#6beb6b", "#00ca00"],
    };
  },
  computed: {
    getProgressWidth() {
      return function (rating) {
        return (rating / 10) * 100;
      };
    },
    setProgressBarColor() {
      return (rating) => {
        if (rating <= 4) {
          return this.colors[0];
        } else if (rating > 4 && rating <= 7) {
          return this.colors[1];
        } else if (rating > 7 && rating <= 10) {
          return this.colors[2];
        }
      };
    },
  },
};
</script>
