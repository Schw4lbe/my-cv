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

    <div class="language-container">
      <div class="language-option">
        <input
          v-model="deSelected"
          type="radio"
          id="de"
          name="drone"
          value="huey"
        />
        <label for="de">Deutsch <i class="fa-solid fa-flag"></i></label>
      </div>

      <div class="language-option">
        <input
          v-model="enSelected"
          type="radio"
          id="en"
          name="drone"
          value="dewey"
        />
        <label for="en">English <i class="fa-solid fa-flag"></i></label>
      </div>
    </div>

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
      deSelected: "",
      enSelected: "",
    };
  },

  computed: {
    ...mapGetters(["hasServerError", "isWaitingForServer"]),

    isButtonDisabled() {
      return !(
        this.username &&
        this.password &&
        (this.deSelected || this.enSelected)
      );
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
