<template>
  <form action="">
    <h1>Login Dummy</h1>
    <button @click="onLoginClick()">Login</button>
  </form>
</template>

<script>
export default {
  name: "LoginView",

  methods: {
    onLoginClick() {
      console.log("clicked on Login.");
      this.$emit("login-clicked");
    },
  },
};
</script>

<style scoped>
h1 {
  color: tomato;
}
</style>
