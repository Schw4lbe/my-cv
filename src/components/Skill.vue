<template>
  <section class="skill-data-container">
    <div
      v-for="(category, catIndex) in skillData"
      :key="catIndex"
      class="skill-section-container"
      :class="setVariation(catIndex)"
      @click="handleSectionToggle"
    >
      <input
        type="checkbox"
        :id="'skill-section-' + catIndex"
        :checked="isSectionVisible(catIndex)"
        class="section-control"
      />
      <label
        :for="'skill-section-' + catIndex"
        class="section-label"
        @click.stop
        >{{ category.lable }}</label
      >
      <p class="section-description">{{ category.description }}</p>

      <div class="bracket">
        <div
          v-for="(skill, index) in category.items"
          :key="index"
          class="skill-container"
        >
          <div class="render-decider" v-if="isSectionVisible(catIndex)">
            <div class="icon">
              <i :class="skill.icon" class="skill-icon"></i>
            </div>
            <div class="bar-container">
              <div class="label">{{ skill.name }}</div>
              <div class="progress-bar">
                <div
                  :style="{
                    width: getProgressWidth(skill.rating),
                    animationDuration: getAnimationDuration(skill.rating),
                  }"
                  class="progress"
                >
                  <div class="glow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Skill",
  props: {
    skillData: Array,
  },

  data() {
    return {
      showSection0: false,
      showSection1: false,
      showSection2: false,
    };
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    getProgressWidth() {
      return function (rating) {
        return rating * 10 + "%";
      };
    },

    getAnimationDuration() {
      return function (rating) {
        return rating / 5 + "s";
      };
    },
  },

  mounted() {
    setTimeout(() => {
      this.initFirstElement();
    }, 1000);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },

  methods: {
    initFirstElement() {
      this.showSection0 = true;
      const element = document.querySelector(".section-label");
      if (element) {
        element.classList.add("skill-section-open", "section0-active");
      }
    },

    setVariation(index) {
      return `variation-${index}`;
    },

    handleSectionToggle(e) {
      // Stop the event from bubbling up and double trigger
      // @click.stop event on label to make stopPropagation function work
      e.stopPropagation();

      const id = e.target.id;
      const element = document.getElementById(id);
      this.toggleSectionOpen(element);

      setTimeout(() => {
        if (!element) {
          return;
        } else {
          element.parentElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 200);

      const sectionId = parseInt(id.slice(-1));
      this[`showSection${sectionId}`] = !this[`showSection${sectionId}`];
    },

    toggleSectionOpen(el) {
      if (!el) {
        return;
      }

      const sectionIndex = el.id.split("-").pop(); // Get the number from the id
      el.nextSibling.classList.toggle(`section${sectionIndex}-active`);
      el.nextSibling.classList.toggle("skill-section-open");
    },

    isSectionVisible(index) {
      return this[`showSection${index}`];
    },
  },
};
</script>
