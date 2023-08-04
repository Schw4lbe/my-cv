<template>
  <div class="loading-container">
    <div class="loading-header">
      <h1>{{ header }}</h1>
      <h2>{{ subHeader }}</h2>
      <p>
        Hier kommt die info rein, warum und wie ich diese Seite erstellt habe
      </p>
    </div>
    <div class="image-frame">
      <img class="portrait" alt="picture" src="../assets/jph.jpg" />
    </div>
    <div class="dummy-animation">
      <div class="text-container">
        <div class="text-slider">
          some Text to be displayed after animation hits half time.
        </div>
        <p class="text-content">
          some Text to be displayed after animation hits half time.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: {
    header: String,
    subHeader: String,
  },
};
</script>
<style scoped>
.dummy-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #444;
  width: 100%;
}
.text-container {
  position: relative;
  width: max-content;
}

.text-slider,
.text-content {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, 0%);
  width: 450px;
  opacity: 0;
}

.text-slider {
  background: tomato;
  color: tomato;
  padding: 1rem;
  z-index: 1;
  font-size: 0;

  animation-name: slideInOutBar;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-delay: 1s;
}

.text-content {
  color: black;
  font-weight: bold;
  padding: 0.5rem;
  z-index: -1;

  animation-name: showText;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-duration: 0.5s;
  animation-delay: 1s;
}

@keyframes slideInOutBar {
  0% {
    width: 0px;
    opacity: 1;
  }
  50% {
    width: 450px;
  }
  99% {
    opacity: 1;
  }
  100% {
    width: 0px;
    opacity: 0;
  }
}

@keyframes showText {
  0% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
