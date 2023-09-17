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

    <div class="language-container" ref="langContainer">
      <div class="language-option">
        <input
          @click="catchSelectecLanguage"
          type="radio"
          id="de"
          name="drone"
          value="huey"
        />
        <label for="de">Deutsch <i class="fa-solid fa-flag"></i></label>
      </div>

      <div class="language-option">
        <input
          @click="catchSelectecLanguage"
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
      <p>{{ loading }}</p>
      <i class="fa-regular fa-hourglass-half"></i>
      <div class="lazyloader"></div>
    </div>

    <div v-if="hasServerError" class="error-message">
      {{ error }}
    </div>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "LoginView",
  props: {
    loading: String,
    error: String,
  },

  data() {
    return {
      username: "",
      password: "",
      selectedLanguage: "",
    };
  },

  computed: {
    ...mapGetters(["hasServerError", "isWaitingForServer"]),

    isButtonDisabled() {
      return !(this.username && this.password && this.selectedLanguage);
    },
  },

  methods: {
    catchSelectecLanguage(e) {
      this.selectedLanguage = e.currentTarget.id;
      console.log(this.selectedLanguage);
    },

    onLoginClick() {
      const username = this.username;
      const password = this.password;
      const language = this.selectedLanguage;

      this.$emit("login-clicked", { username, password, language });

      this.username = "";
      this.password = "";
      this.resetRadio();
      this.waitingForServerResponse();
    },

    resetRadio() {
      const radios = this.$refs.langContainer.querySelectorAll(
        'input[type="radio"]'
      );
      radios.forEach((radio) => {
        radio.checked = false;
      });
    },

    resetShowError() {
      this.serverErrorFalse();
    },

    ...mapMutations(["serverErrorFalse", "waitingForServerResponse"]),
  },
};
</script>
