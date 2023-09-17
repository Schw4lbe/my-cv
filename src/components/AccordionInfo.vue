<template>
  <div class="accordion-wrapper">
    <div class="accordion-container">
      <div
        @click="focusOnClick"
        v-for="(item, index) in items"
        :key="item.id"
        class="tab"
      >
        <input
          type="checkbox"
          :id="item.id"
          :checked="index === checkedIndex"
        />
        <label class="tab-label" :for="item.id"
          ><span>{{ item.header }}</span
          ><span>{{ item.period }}</span>
        </label>
        <div class="tab-content">
          <ul>
            <li v-for="subtopic in item.subtopics" :key="subtopic">
              {{ subtopic }}
            </li>
            <br />
            <span
              ><i>{{ setRefSuccessMsg }}{{ item.success }}</i></span
            >
          </ul>
          <div class="tab-media">
            <img
              v-if="item.logo != undefined && item.logo.length > 0"
              :src="item.logo"
              alt="logo"
            />
          </div>
          <div v-if="item.link.length > 0" class="tab-link-container">
            <a class="tab-link" :href="item.link" target="_blank">{{
              setButtonText
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AccordionInfo",
  props: {
    items: Array,
  },

  computed: {
    ...mapGetters(["selectedLanguage"]),

    setRefSuccessMsg() {
      return this.$store.state.contentData[this.selectedLanguage]
        .referenceSuccessMsg;
    },

    setButtonText() {
      return this.$store.state.contentData[this.selectedLanguage]
        .buttonLinkText;
    },
  },

  data() {
    return {
      checkedIndex: 0,
    };
  },

  methods: {
    focusOnClick(e) {
      setTimeout(function () {
        e.target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
  },
};
</script>
