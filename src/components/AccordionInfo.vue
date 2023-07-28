<template>
  <div class="accordion-container">
    <div v-for="item in items" :key="item.id" class="tab">
      <input type="checkbox" :id="item.id" />
      <label class="tab-label" :for="item.id">{{ item.header }}</label>
      <div class="tab-content">
        <ul>
          <li v-for="subtopic in item.subtopics" :key="subtopic">
            {{ subtopic }}
          </li>
        </ul>
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
};
</script>
