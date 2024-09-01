<template>
  <div class="dev-wrapper">
    <div class="dev timeline-container">
      <div
        v-for="item in timelineItems"
        :key="item.id"
        :id="'timeline-item' + item.id"
        class="timeline-item"
      >
        <div class="timeline-marker"></div>
        <div class="timeline-period">{{ item.period }}</div>
        <div class="timeline-content">
          <h3 class="timeline-header" @click="setTimelineActive">
            {{ item.header }}
          </h3>
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

  data() {
    return {
      lastActiveTimeline: null,
    };
  },

  props: {
    timelineItems: Array,
  },

  methods: {
    setTimelineActive(e) {
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
