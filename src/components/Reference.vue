<template>
  <div class="ref-wrapper">
    <div class="ref-container">
      <div
        v-for="item in referenceData"
        :key="item.id"
        class="ref-item"
        id="test"
      >
        <div class="grid-container">
          <h3 class="ref-header ref-animate-control animate__animated hidden">
            {{ item.header }}
          </h3>
          <p class="ref-text ref-animate-control animate__animated hidden">
            {{ item.text }}
          </p>
          <h4
            class="ref-subheader ref-animate-control animate__animated hidden"
          >
            {{ item.subheader }}
          </h4>
          <ul class="ref-subtopics">
            <li
              v-for="(topic, index) in item.subtopics"
              :key="index"
              class="ref-topic ref-animate-control animate__animated hidden"
            >
              {{ topic }}
            </li>
          </ul>
          <div
            class="btn-container ref-animate-control animate__animated hidden"
          >
            <button class="ref-repo-btn">
              <a :href="item.link" class="repo-link"
                >GitHub Repository <i class="fa-brands fa-github"></i
              ></a>
            </button>
            <button v-if="item.link2" class="ref-repo-btn">
              <a :href="item.link2" class="repo-link">DUMMY</a>
            </button>
          </div>
        </div>
        <div
          class="grid-container image-container ref-animate-control animate__animated hidden"
        >
          <img :src="item.image" alt="reference image" class="ref-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reference",
  props: {
    referenceData: Array,
  },

  mounted() {
    this.setupIntersectionObserver();

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },

  methods: {
    setupIntersectionObserver() {
      const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 1, // Trigger when at least 100% of the element is visible
      };

      // use vue intersection observer api
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(
              ".ref-animate-control"
            );

            elements.forEach((el, index) => {
              if (el.classList.contains("image-container")) {
                el.classList.remove("hidden");
                el.classList.add("visible", "animate__zoomIn");
              } else {
                setTimeout(() => {
                  el.classList.remove("hidden");
                  el.classList.add("visible", "animate__backInLeft");
                }, 50 * index);
              }
            });
          }
        });
      }, observerOptions);

      const items = this.$el.querySelectorAll(".ref-item");
      items.forEach((item) => {
        observer.observe(item);
      });
    },
  },
};
</script>
