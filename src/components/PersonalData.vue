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
        <span>{{ skill.name }}</span>
        <progress :value="animateSkillValue(skill.value)" max="100"></progress>
        <span>{{ skill.rating }} / 10</span>
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
  methods: {
    animateSkillValue() {},
  },
};
</script>
