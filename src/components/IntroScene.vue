<template>
  <h3 id="intro01">Warum eigentlich ein online Lebenslauf?</h3>
  <h3 id="intro02">
    Weil bewegte Referenzen mehr sagen, als ein statischer Text.
  </h3>
</template>

<script>
export default {
  name: "IntroScene",
};
</script>

<style scoped>
h3 {
  color: white;
  font-size: 2rem;
  opacity: 0;
}

#intro01 {
  animation-name: fadeInOutIntro;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-duration: 10s;
}

#intro02 {
  animation-name: fadeInOutIntro;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-duration: 10s;
  animation-delay: 11s;
}

@keyframes fadeInOutIntro {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 100;
  }
  100% {
    opacity: 0;
  }
}
</style>
