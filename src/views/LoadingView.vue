<template>
  <div class="loading">
    <MenuMain></MenuMain>
    <div class="image-frame">
      <img class="img-animation" alt="picture" src="../assets/dummy.png" />
    </div>
    <LoadingScreen
      class="loading-header"
      header="Lebenslauf"
      subHeader="Jean-Pierre Häussler"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuMain from "@/components/MenuMain.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  name: "LoadingView",
  components: {
    LoadingScreen,
    MenuMain,
  },
};
</script>
<style scoped>
.loading-header {
  position: absolute;
  width: 100%;
  top: 65%;
}
.image-frame {
  position: absolute;
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;

  animation-name: imageSlide;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-duration: 2s;
  animation-delay: 10s;
}

@keyframes imageSlide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-35%);
  }
}

img {
  position: relative;
  height: 65%;
  width: 65%;
}
@keyframes profile {
  0% {
    border-radius: 0%;
    height: 65%;
    width: 65%;
  }
  100% {
    border-radius: 100%;
    height: 30%;
    width: 30%;
  }
}
.img-animation {
  border-radius: 0%;
  animation-name: profile;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-duration: 2s;
  animation-delay: 10s;
}
</style>
