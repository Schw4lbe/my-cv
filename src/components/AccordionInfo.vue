<template>
  <div class="accordion-wrapper">
    <div class="accordion-container">
      <div @click="onClickOpenTabs" class="tab tab-control">
        {{ accordionOpenText }}
      </div>
      <div
        @click="focusOnClick"
        v-for="(item, index) in items"
        :key="item.id"
        class="tab tab-element"
      >
        <input
          ref="trigger"
          class="tab-input"
          type="checkbox"
          :id="item.id"
          :checked="index === checkedIndex"
        />
        <label class="tab-label" :for="item.id"
          ><span>{{ item.header }}</span
          ><span>{{ item.period }}</span>
        </label>

        <div v-if="item.hasMedia === true" class="tab-content-media">
          <div class="tab-content-media-grid">
            <p>{{ item.text }}</p>
            <ul>
              <h3>{{ item.subheader }}</h3>
              <li v-for="subtopic in item.subtopics" :key="subtopic">
                {{ subtopic }}
              </li>
            </ul>
            <div class="media-container">
              <VueModal :image="item.media" :modalHeader="item.header" />
            </div>
          </div>
        </div>

        <div v-if="item.hasMedia === undefined" class="tab-content">
          <ul>
            <li v-for="subtopic in item.subtopics" :key="subtopic">
              {{ subtopic }}
            </li>
            <br />
            <span v-if="item.success != undefined"
              ><i>{{ setRefSuccessMsg }}{{ item.success }}</i></span
            >
          </ul>
          <div v-if="item.logo != undefined" class="tab-image-container">
            <img :src="item.logo" alt="logo" />
          </div>
          <div
            v-if="item.link != undefined && item.link.length > 0"
            class="tab-link-container"
          >
            <a class="tab-link" :href="item.link" target="_blank">{{
              setHyperlinkText
            }}</a>
          </div>
        </div>
      </div>
      <div @click="onClickCloseTabs" class="tab tab-control">
        {{ accordionCollapseText }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueModal from "@/components/VueModal.vue";

export default {
  name: "AccordionInfo",
  components: {
    VueModal,
  },
  props: {
    items: Array,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    setRefSuccessMsg() {
      return this.$store.state.contentData[this.selectedLanguage]
        .referenceSuccessMsg;
    },

    setHyperlinkText() {
      return this.$store.state.contentData[this.selectedLanguage]
        .buttonLinkText;
    },

    accordionOpenText() {
      return this.$store.state.contentData[this.selectedLanguage]
        .accordionOpenText;
    },

    accordionCollapseText() {
      return this.$store.state.contentData[this.selectedLanguage]
        .accordionCollapseText;
    },
  },

  data() {
    return {
      checkedIndex: 0,
      tabsArr: null,
      firstTab: null,
    };
  },

  mounted() {
    this.tabsArr = document.querySelectorAll(".tab-input");
    this.firstTab = document.querySelector(".tab-input");
  },

  methods: {
    focusOnClick(e) {
      setTimeout(function () {
        e.target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },

    onClickOpenTabs() {
      this.tabsArr.forEach((el) => {
        el.checked = true;
      });
    },

    onClickCloseTabs() {
      this.tabsArr.forEach((el) => {
        el.checked = false;
      });
      this.firstTab.checked = true;
    },
  },
};
</script>
