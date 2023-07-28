<template>
  <div class="data-container">
    <div class="personal-data-container">
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
    </div>

    <div class="skill-data-container">
      <div v-for="skill in skills" :key="skill.id" class="skillbox">
        <div :class="skill.name">
          <h3>{{ skill.name }}</h3>
          <span class="percentage">{{ skill.value }}%</span>
          <div class="cover">
            <div class="progressbar"></div>
          </div>
        </div>
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
};
</script>

<style scoped>
.data-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 2rem;
}
.skill-data-container {
  width: 100%;
  /* position: absolute;
  top: 50%;
  left: 50%; */
  padding: 10px 20px 20px 20px;
  box-sizing: border-box;
  /* transform: translate(-50%, -50%); */
  background-color: #333;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}
.skillbox h3 {
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;
}
.skillbox .percentage {
  float: right;
  position: relative;
  top: -40px;
  font-weight: bold;
  color: #fff;
}
.cover {
  width: 100%;
  height: 10px;
  background-color: #262626;
  border: 1px solid #0fffb4;
  border-radius: 2px;
}
.cover .progressbar {
  height: 6px;
  background-color: #0fffb4;
  margin-left: 2px;
  margin-top: 2px;
  border-radius: 2px;
}
.html .progressbar {
  animation: animatehtml 2s linear;
}
.css .progressbar {
  width: 85%;
  transition: 2s;
  animation: animatecss 2s linear;
}
.javascript .progressbar {
  width: 20%;
  transition: 2s;
  animation: animatejavascript 2s linear;
}
.photoshop .progressbar {
  width: 95%;
  transition: 2s;
  animation: animatephotoshop 2s linear;
}
.designing .progressbar {
  width: 40%;
  transition: 2s;
  animation: animatedesigning 2s linear;
}

@keyframes animatehtml {
  0% {
    width: 0;
  }
  100% {
    width: 90%;
  }
}
@keyframes animatecss {
  0% {
    width: 0;
  }
  100% {
    width: 85%;
  }
}
@keyframes animatejavascript {
  0% {
    width: 0;
  }
  100% {
    width: 20%;
  }
}
@keyframes animatephotoshop {
  0% {
    width: 0;
  }
  100% {
    width: 95%;
  }
}
@keyframes animatedesigning {
  0% {
    width: 0;
  }
  100% {
    width: 40%;
  }
}
</style>
