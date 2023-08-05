<template>
  <div class="data-container">
    <div class="personal-data-container">
      <div class="propertie-container">
        <h2>Stärken</h2>
        <ul>
          <li v-for="prop in properties" :key="prop.id">{{ prop.name }}</li>
        </ul>
      </div>

      <div class="hobby-container">
        <h2>Hobbies</h2>
        <ul>
          <li v-for="hobby in hobbies" :key="hobby.id">{{ hobby.name }}</li>
        </ul>
      </div>
    </div>

    <div class="skill-data-container">
      <h2>Skill Matrix Web-Development:</h2>
      <div v-for="skill in skills" :key="skill.id" class="skill-container">
        <i :class="skill.icon" class="skill-icon"></i>
        <span class="skill-name">{{ skill.name }}</span>
        <span class="skill-rating">{{ skill.rating }} / 10</span>
        <div class="progress-bar">
          <div
            :style="{
              width: getProgressWidth(skill.rating) + '%',
              backgroundColor: setProgressBarColor(skill.rating),
            }"
            class="progress"
          ></div>
        </div>
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
    properties: Array,
    hobbies: Array,
    skills: Array,
  },
  data() {
    return {
      colors: [
        { id: "0", code: "#0145ff" },
        { id: "1", code: "#1571ff" },
        { id: "2", code: "#2797ff" },
        { id: "3", code: "#3abeff" },
        { id: "4", code: "#47b4fd" },
        { id: "5", code: "#58bcff" },
        { id: "6", code: "#72c7ff" },
        { id: "7", code: "#91d3ff" },
        { id: "8", code: "#b4ddff" },
        { id: "10", code: "#ffffff" },
      ],
    };
  },
  computed: {
    getProgressWidth() {
      return function (rating) {
        return (rating / 10) * 100;
      };
    },
    setProgressBarColor() {
      return function (rating) {
        if (rating === "1") {
          return this.colors[0].code;
        } else if (rating === "2") {
          return this.colors[1].code;
        } else if (rating === "3") {
          return this.colors[2].code;
        } else if (rating === "4") {
          return this.colors[3].code;
        } else if (rating === "5") {
          return this.colors[4].code;
        } else if (rating === "6") {
          return this.colors[5].code;
        } else if (rating === "7") {
          return this.colors[6].code;
        } else if (rating === "8") {
          return this.colors[7].code;
        } else if (rating === "9") {
          return this.colors[8].code;
        } else if (rating === "10") {
          return this.colors[9].code;
        }
      };
    },
  },
};
</script>

<style scoped>
.data-container {
  width: 100%;
  max-width: 1920px;
}
</style>
