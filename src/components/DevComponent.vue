<template>
  <div class="dev-wrapper">
    <div class="dev timeline-container">
      <div
        v-for="(item, itemIndex) in timelineItems"
        :key="item.id"
        :id="'timeline-item' + item.id"
        class="timeline-item"
        :class="{ 'timeline-focus': itemIndex === 0 }"
      >
        <div class="timeline-marker"></div>
        <div class="timeline-period">{{ item.period }}</div>
        <div class="timeline-content">
          <h3 class="timeline-header" @click="setTimelineActive">
            {{ item.header }}
          </h3>
          <p class="teaser">[ klick für mehr Infos ]</p>
          <ul class="subtopics">
            <li
              v-for="(topic, index) in item.subtopics"
              :key="index"
              class="topic animate__animate animate__backInRight"
            >
              {{ topic }}
            </li>
          </ul>
          <p class="success">{{ item.success }}</p>
          <button class="btn-reference">
            <a :href="item.link" class="item-link">DUMMY</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DevComponent",
  props: {
    timelineItems: Array,
  },

  data() {
    return {
      lastActiveTimeline: null,
    };
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
        if (focusable.classList.contains("timeline-active")) {
          console.log("active timeline");
        } else {
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
      const timeline = e.target.closest(".timeline-item");

      if (timeline && timeline !== this.lastActiveTimeline) {
        this.lastActiveTimeline?.classList.toggle("timeline-active");
        this.lastActiveTimeline?.classList.toggle("timeline-focus");
        this.lastActiveTimeline = timeline;
      }
      timeline.classList.toggle("timeline-active");
      timeline.classList.toggle("timeline-focus");
    },
  },
};
</script>
<style scoped>
.dev-wrapper {
  display: flex;
  justify-content: center;
}
</style>
