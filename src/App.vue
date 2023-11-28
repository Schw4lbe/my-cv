<template>
  <div
    v-if="isWaitingForServer"
    class="login-loading-background"
    :class="{ hide: isElementHidden }"
  ></div>
  <div
    v-if="!isLoginSuccess"
    class="login-wrapper"
    :class="{ hide: isLoginHidden }"
  >
    <div class="login-color-lighten">
      <div
        v-if="!isLoginSuccess && loginFailed === false"
        class="login-container"
      >
        <LoginView
          @login-clicked="handleLogin"
          :loading="serverMsg"
          :error="errorMsg"
        />
      </div>

      <div v-if="loginFailed === true" class="timeout-container">
        <TimeOut :content="timeoutContent" />
      </div>
    </div>
  </div>

  <div v-if="isLoginSuccess" class="page-wrapper">
    <div class="cv-readycheck" :class="{ hide: isElementHidden }" id="test">
      <ReadyCheck
        :content="readyCheckContentArray"
        @form-submit="onFormSubmitted"
      />
    </div>
    <div class="cv-main" v-if="isCvMainVisible">
      <div class="navbar-wrapper">
        <NavbarMain :navbarItems="navbarItemsArray" />
      </div>
      <router-view />
    </div>
  </div>
  <FooterMain v-if="isLoginSuccess" :items="footerItems" />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import NavbarMain from "@/components/NavbarMain.vue";
import ReadyCheck from "@/components/ReadyCheck.vue";
import FooterMain from "@/components/FooterMain.vue";
import LoginView from "@/views/LoginView.vue";
import TimeOut from "@/components/TimeOut.vue";

import axios from "axios";

export default {
  components: {
    NavbarMain,
    ReadyCheck,
    FooterMain,
    LoginView,
    TimeOut,
  },
  data() {
    return {
      loginFailed: false,
      loginButton: null,
    };
  },

  created() {
    const cvMainVisible = localStorage.getItem("cvMainVisible");
    if (cvMainVisible === "true") {
      this.showCvMain();
    } else {
      return;
    }

    const elementHidden = localStorage.getItem("elementHidden");
    if (elementHidden === "true") {
      this.hideElement();
    } else {
      this.showElement();
    }
  },

  computed: {
    ...mapGetters([
      "isElementHidden",
      "isCvMainVisible",
      "isLoginHidden",
      "isLoginSuccess",

      "selectedLanguage",
      "isWaitingForServer",
    ]),

    selectedLanguage() {
      return this.$store.getters.selectedLanguage;
    },

    serverMsg() {
      return this.$store.state.contentData.serverMsg;
    },

    errorMsg() {
      return this.$store.state.contentData[this.selectedLanguage].errorMsg;
    },

    timeoutContent() {
      return this.$store.state.contentData[this.selectedLanguage]
        .timeoutContent;
    },

    navbarItemsArray() {
      return this.$store.state.contentData[this.selectedLanguage].menuItems;
    },

    readyCheckContentArray() {
      return this.$store.state.contentData[this.selectedLanguage]
        .readyCheckContent;
    },

    footerItems() {
      return this.$store.state.contentData.navbarItems;
    },
  },

  mounted() {
    this.loginButton = document.querySelector("#login-button");
  },

  methods: {
    // dev only:
    // handleLogin(credentials) {
    //   this.setCookieLanguage(credentials.language);
    //   this.loginSuccess();
    // },

    async handleLogin(credentials) {
      try {
        const apiUrl = "https://sandbox-coding.de/login";
        const response = await axios.post(apiUrl, credentials, {
          timeout: 10000,
        });

        console.log("Login successful:", response.data);
        this.$store.commit("loginSuccess");
        this.hideLogin();
        this.setCookieLanguage(credentials.language);
      } catch (error) {
        if (!error.response) {
          this.setCookieLanguage(credentials.language);
          console.error("Server not available.");
          console.log(error.response);
          this.serverErrorTrue();
          this.notWaitingForServerResponse();
        } else if (error.response.status === 401) {
          this.setCookieLanguage(credentials.language);
          this.enableTimeout();
          this.notWaitingForServerResponse();
          setTimeout(() => {
            this.loginFailed = false;
            this.enableLoginButton();
          }, 10000);
        }
      }
    },

    setCookieLanguage(lang) {
      if (lang === "de") {
        console.log("german");
        this.$store.commit("setLanguageDE");
      } else if (lang === "en") {
        this.$store.commit("setLanguageEN");
        console.log("english");
      }
    },

    enableTimeout() {
      this.disableLoginButton();
      this.loginFailed = true;
      this.startCountdown();
    },

    startCountdown() {
      let seconds = 9;
      const timer = setInterval(function () {
        seconds--;

        const counter = document.querySelector("#countdown");
        counter.innerHTML = seconds;

        if (seconds <= 0) {
          clearInterval(timer);
        }
      }, 1000);
    },

    disableLoginButton() {
      this.loginButton.disabled = true;
    },

    enableLoginButton() {
      this.loginButton.disabled = false;
    },

    ...mapMutations([
      "hideElement",
      "showElement",
      "showCvMain",
      "hideLogin",
      "loginSuccess",
      "serverErrorTrue",
      "notWaitingForServerResponse",

      "setLanguageDE",
      "setLanguageEN",
    ]),

    onFormSubmitted() {
      this.hideElement();
      this.showCvMain();
    },
  },
};
</script>
