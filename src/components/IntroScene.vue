<template>
  <div class="intro-container">
    <div class="text-container" id="intro01">
      <p id="text01">{{ content[0] }}</p>
    </div>
    <div class="text-container" id="intro02">
      <p id="text02">{{ content[1] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroScene",
  props: {
    content: Array,
  },
};
</script>
