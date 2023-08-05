<template>
  <div class="accordion-reference-container">
    <div class="row">
      <div class="col">
        <div class="tabs">
          <div class="tab">
            <input type="radio" id="rd1" name="rd" />
            <label class="tab-label" for="rd1">Item 1</label>
            <div class="tab-content">Text</div>
          </div>
          <div class="tab">
            <input type="radio" id="rd3" name="rd" />
            <label for="rd3" class="tab-close">Alle schließen. &times;</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionReference",
};
</script>
