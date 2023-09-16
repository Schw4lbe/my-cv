<template>
  <div class="timeout-frame">
    <h3>{{ content.header }}<i class="fa-solid fa-ban"></i></h3>
    <div class="countdown-container">
      {{ content.message }}
      <span id="countdown">9</span>
      {{ content.message2 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeOut",
  props: {
    content: Object,
  },
};
</script>
