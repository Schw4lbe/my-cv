<template>
  <div class="loading">
    <MenuMain></MenuMain>
    <div class="image-frame">
      <img class="img-animation" alt="picture" src="../assets/dummy.png" />
    </div>
    <LoadingScreen header="Lebenslauf" subHeader="Jean-Pierre Häussler" />
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
/* .image-frame {
  height: 500px;
} */

img {
  height: 65%;
  width: 65%;
}
@keyframes profile {
  0% {
    border-radius: 0%;
    height: 65%;
    width: 65%;
  }
  25% {
    border-radius: 10%;
    height: 65%;
    width: 65%;
  }
  75% {
    border-radius: 50%;
    height: 55%;
    width: 55%;
  }
  100% {
    border-radius: 100%;
    height: 20%;
    width: 20%;
  }
}
.img-animation {
  border-radius: 0%;
  animation-name: profile;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-duration: 2s;
}
</style>
