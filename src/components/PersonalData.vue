<template>
  <div class="data-container">
    <!-- <div class="personal-data-container">
      <div class="propertie-container">
        <ul>
          <li v-for="prop in properties" :key="prop.id">{{ prop.name }}</li>
        </ul>
      </div>
      <div class="hobby-container">
        <ul>
          <li v-for="hobby in hobbies" :key="hobby.id">{{ hobby.name }}</li>
        </ul>
      </div>
    </div> -->

    <div class="skill-data-container">
      <div v-for="skill in skills" :key="skill.id" class="skill-container">
        <i :class="skill.icon" class="skill-icon"></i>
        <span class="skill-name">{{ skill.name }}</span>
        <div class="progress-bar">
          <div
            :style="{ width: getProgressWidth(skill.rating) + '%' }"
            class="progress"
          ></div>
        </div>
        <span class="skill-rating">{{ skill.rating }} / 10</span>
      </div>
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
  computed: {
    getProgressWidth() {
      return (rating) => {
        return (rating / 10) * 100;
      };
    },
  },
};
</script>
