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
        <div class="grid-container animate__animated animate__fadeIn">
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
    this.animationTest();

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },

  methods: {
    animationTest() {
      const parent = document.querySelector("#test");
      const elements = parent.querySelectorAll(".ref-animate-control");

      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.remove("hidden");
          el.classList.add("visible", "animate__backInLeft");
        }, 100 * index);
      });
    },
  },
};
</script>
