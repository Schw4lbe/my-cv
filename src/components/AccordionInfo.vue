<template>
  <div class="accordion-container">
    <div v-for="(item, index) in items" :key="item.id" class="tab">
      <input type="checkbox" :id="item.id" :checked="index === checkedIndex" />
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
            ><i>Größter Erfolg: {{ item.success }}</i></span
          >
        </ul>
        <div class="tab-media">
          <img
            v-if="
              (item.logo != undefined && item.logo.length > 0) ||
              (item.media != undefined && item.media.length > 0)
            "
            :src="item.logo"
            alt="test"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionInfo",
  props: {
    items: Array,
  },
  data() {
    return {
      checkedIndex: 0,
    };
  },
};
</script>
