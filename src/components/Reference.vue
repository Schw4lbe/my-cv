<template>
  <div class="ref-wrapper">
    <h5 class="ref-description animate__animated animate__backInDown">
      {{ refDescription }}
    </h5>
    <div class="ref-container">
      <div v-for="item in referenceData" :key="item.id" class="ref-item">
        <div class="ref-next-item-control">
          <button
            class="ref-next-item-btn ref-next-pending"
            @click="nextItemScroll"
          >
            next item
            <i class="fa-solid fa-arrow-down ref-next-pending-arrow"></i>
          </button>
        </div>

        <div class="grid-container">
          <div class="grid-item-1">
            <h3 class="ref-header ref-animate-control animate__animated hidden">
              {{ item.header }}
            </h3>
            <p class="ref-text ref-animate-control animate__animated hidden">
              {{ item.text }}
            </p>
          </div>

          <div class="grid-item-2">
            <div
              class="image-container ref-animate-control animate__animated hidden"
            >
              <img :src="item.image" alt="reference image" class="ref-image" />
            </div>
          </div>

          <div class="grid-item-3">
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
              <button v-if="item.link" class="ref-repo-btn">
                <a :href="item.link" target="_blank" class="repo-link"
                  >GitHub Repository <i class="fa-brands fa-github"></i
                ></a>
              </button>
              <button v-if="item.link2" class="ref-repo-btn">
                <a :href="item.link2" target="_blank" class="repo-link"
                  >GitHub Repository <i class="fa-brands fa-github"></i
                ></a>
              </button>
              <button
                class="ref-demo-btn"
                @click="showModal({ title: item.header, media: item.media })"
              >
                Play Demo <i class="fa-regular fa-circle-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="viewModal === true" class="modal-render-container">
    <VueModal
      :title="modalTitle"
      :media="modalMedia"
      @close-modal="closeModal"
    />
  </div>
</template>

<script>
import VueModal from "@/components/utility/VueModal.vue";

export default {
  name: "Reference",
  props: {
    referenceData: Array,
    refDescription: String,
  },
  components: {
    VueModal,
  },

  data() {
    return {
      viewModal: false,
      modalTitle: "",
      modalMedia: "",
    };
  },

  mounted() {
    this.setupIntersectionObserver();

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },

  methods: {
    showModal(payload) {
      this.modalTitle = payload.title;
      this.modalMedia = payload.media;
      this.viewModal = true;
    },

    closeModal() {
      this.viewModal = false;
      this.modalTitle = "";
      this.modalMedia = "";
    },

    nextItemScroll(e) {
      const item = e.target.closest(".ref-item");
      item.scrollIntoView({ behavior: "smooth", block: "start" });
      // add additional scroll distance
      // setTimeout(() => {
      //   window.scrollBy(0, 150);
      // }, 500);
    },

    setupIntersectionObserver() {
      const observerOptions = {
        root: null, // use the viewport as the root
        rootMargin: "0px",
        threshold: 0.4, // trigger when 80% of element is visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(
              ".ref-animate-control"
            );
            const button = entry.target.querySelector(".ref-next-item-control");
            button.classList.add("hidden");

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

      const items = document.querySelectorAll(".ref-item");
      items.forEach((item) => {
        observer.observe(item);
      });
    },
  },
};
</script>
