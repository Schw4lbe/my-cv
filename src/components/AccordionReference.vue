<template>
  <div class="accordion-reference-wrapper">
    <div class="accordion-reference-container">
      <div class="row">
        <div class="col">
          <div class="tabs">
            <div v-for="(item, index) in items" :key="index" class="tab">
              <input
                type="radio"
                :id="item.id"
                name="rd"
                :checked="index === checkedIndex"
              />
              <label @click="focusOnClick" class="tab-label" :for="item.id">{{
                item.name
              }}</label>
              <div class="tab-content">
                <div class="reference-grid-container">
                  <div class="reference-container">
                    <div class="description-container">
                      <p class="reference-info">{{ item.content.text }}</p>
                      <br />
                      <h3>{{ item.content.subheader }}</h3>
                      <ul>
                        <li
                          v-for="(note, index) in item.content.notes"
                          :key="index"
                        >
                          {{ note }}
                        </li>
                      </ul>
                    </div>
                    <div class="media-container">
                      <VueModal
                        :image="item.content.img"
                        :modalHeader="item.name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab">
              <input type="radio" id="rd3" name="rd" />
              <label for="rd3" class="tab-close">Alle schließen. &times;</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueModal from "./VueModal.vue";

export default {
  name: "AccordionReference",
  props: {
    items: Array,
    images: Array,
  },
  components: {
    VueModal,
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
