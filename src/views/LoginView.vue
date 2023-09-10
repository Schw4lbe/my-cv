<template>
  <form action="">
    <h1>Login Dummy</h1>
    <input
      id="username"
      type="text"
      v-model="username"
      placeholder="Username"
    />
    <input
      id="password"
      type="text"
      v-model="password"
      placeholder="Password"
    />
    <button id="login-button" @click="onLoginClick()">Login</button>
  </form>
</template>

<script>
export default {
  name: "LoginView",

  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    onLoginClick() {
      const username = this.username;
      const password = this.password;

      this.$emit("login-clicked", { username, password });
    },
  },
};
</script>

<style scoped>
h1 {
  color: tomato;
}
</style>
