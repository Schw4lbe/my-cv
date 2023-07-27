<template>
  <div>
    <h1>{{ header }}</h1>
    <h2>{{ subHeader }}</h2>
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
