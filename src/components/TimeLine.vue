<template>
  <div class="timeline-wrapper">
    <div class="desc-container">
      <h5
        v-for="(desc, index) in timelineDescription"
        :key="index"
        class="timeline-description animate__animated animate__backInDown"
      >
        {{ desc }}
      </h5>
    </div>
    <div class="dev timeline-container">
      <div
        v-for="(item, itemIndex) in timelineItems"
        :key="item.id"
        :id="'timeline-item' + item.id"
        class="timeline-item"
        :class="{ 'timeline-focus': itemIndex === 0 }"
        @click="setTimelineActive"
      >
        <div class="timeline-marker"></div>
        <div class="timeline-period">{{ item.period }}</div>
        <div class="timeline-content">
          <h3 class="timeline-header">
            {{ item.header }}
          </h3>
          <p class="teaser">{{ getTeaserText }}</p>
          <ul class="subtopics">
            <li
              v-for="(topic, index) in item.subtopics"
              :key="index"
              class="topic hidden animate__animated"
            >
              {{ topic }}
            </li>
          </ul>
          <p class="success">{{ getSuccessMsg + ": " + item.success }}</p>
          <button v-if="item.link" class="btn-reference">
            <a :href="item.link" target="_blank" class="item-link">{{
              getButtonText
            }}</a>
          </button>
        </div>
      </div>
    </div>
    <button class="btn-back-up" @click="scrollBackUp">{{ btnContent }}</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "TimeLine",
  props: {
    timelineDescription: Array,
    timelineItems: Array,
    btnContent: String,
  },

  data() {
    return {
      lastActiveTimeline: null,
    };
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    getSuccessMsg() {
      return this.$store.state.contentData[this.selectedLanguage]
        .referenceSuccessMsg;
    },

    getTeaserText() {
      return this.$store.state.contentData[this.selectedLanguage]
        .timelineDetails;
    },

    getButtonText() {
      return this.$store.state.contentData[this.selectedLanguage]
        .buttonLinkText;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.setTimelineFocus);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.setTimelineFocus);
  },

  methods: {
    setTimelineFocus() {
      const focusables = this.$el.querySelectorAll(".timeline-item");
      let closestElement = null;
      let closestDistance = Infinity;
      const viewportMiddle = window.innerHeight / 2;

      focusables.forEach((focusable) => {
        const rect = focusable.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        const distanceToMiddle = Math.abs(viewportMiddle - elementMiddle);

        if (distanceToMiddle < closestDistance) {
          closestDistance = distanceToMiddle;
          closestElement = focusable;
        }
      });

      focusables.forEach((focusable) => {
        if (!focusable.classList.contains("timeline-active")) {
          focusable.classList.remove("timeline-focus");
        }
      });

      if (closestElement) {
        closestElement.classList.add("timeline-focus");
      }
    },

    setTimelineActive(e) {
      if (!e.target) {
        return;
      }

      const allTimelines = document.querySelectorAll(".timeline-item");
      const timeline = e.target.closest(".timeline-item");
      const elementsToAnimate = timeline.querySelectorAll(".topic");

      // Prevent UI error by ensuring only one timeline is active at a time
      if (timeline && timeline !== this.lastActiveTimeline) {
        allTimelines.forEach((el) => {
          el.classList.remove("timeline-active", "timeline-focus");
        });

        timeline.classList.add("timeline-active");
        timeline.classList.add("timeline-focus");

        elementsToAnimate.forEach((el, index) => {
          setTimeout(() => {
            el.classList.remove("hidden");
            el.classList.add("visible", "animate__backInLeft");
          }, 50 * index);
        });

        this.lastActiveTimeline = timeline;
      } else if (timeline === this.lastActiveTimeline) {
        // If the same timeline is clicked, toggle it off
        timeline.classList.remove("timeline-active", "timeline-focus");
        this.lastActiveTimeline = null;
      }
    },

    scrollBackUp() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
