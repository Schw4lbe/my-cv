<template>
  <form class="login-form">
    <h3>Login</h3>
    <input
      id="username"
      type="text"
      v-model="username"
      placeholder="Username"
    />
    <input
      id="password"
      type="password"
      v-model="password"
      placeholder="Password"
    />
    <button
      id="login-button"
      @click="onLoginClick()"
      :disabled="isButtonDisabled"
    >
      Login
    </button>
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

  computed: {
    isButtonDisabled() {
      return !(this.username && this.password);
    },
  },

  methods: {
    onLoginClick() {
      const username = this.username;
      const password = this.password;

      this.$emit("login-clicked", { username, password });

      this.username = "";
      this.password = "";
    },
  },
};
</script>
