<template>
  <form class="login-form">
    <h3>Login</h3>
    <input
      id="username"
      type="text"
      v-model="username"
      placeholder="Username"
      @keydown="resetShowError"
    />
    <input
      id="password"
      type="password"
      v-model="password"
      placeholder="Password"
      @keydown="resetShowError"
    />
    <button
      id="login-button"
      @click="onLoginClick()"
      :disabled="isButtonDisabled"
    >
      Login
    </button>

    <div v-if="isWaitingForServer" class="login-loading">
      <p>...wartet auf Server.</p>
      <i class="fa-regular fa-hourglass-half"></i>
      <div class="lazyloader"></div>
    </div>

    <div v-if="hasServerError" class="error-message">
      Login Server nicht verfügbar.
    </div>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "LoginView",

  data() {
    return {
      username: "",
      password: "",
    };
  },

  computed: {
    ...mapGetters(["hasServerError", "isWaitingForServer"]),

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
      this.waitingForServerResponse();
    },

    resetShowError() {
      this.serverErrorFalse();
    },

    ...mapMutations(["serverErrorFalse", "waitingForServerResponse"]),
  },
};
</script>
