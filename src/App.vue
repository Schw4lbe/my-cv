<template>
  <div
    v-if="!isLoginSuccess"
    class="login-wrapper"
    :class="{ hide: isLoginHidden }"
  >
    <div class="login-color-lighten">
      <div
        v-if="loginSuccessTemp === false && loginFailed === false"
        class="login-container"
      >
        <LoginView @login-clicked="handleLogin" />
      </div>

      <div v-if="loginFailed === true" class="timeout-container">
        <div class="timeout-frame">
          <h3>Timeout<i class="fa-solid fa-ban"></i></h3>
          <div class="countdown-container">
            Die Anmeldeinformationen sind falsch. Bitte probier sie es in
            <span id="countdown">10</span>
            Sekunden erneut.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="loginSuccessTemp === true" class="page-wrapper">
    <div class="loading-animation-container">
      <LoadingAnimatin :class="{ hide: isAnimationHidden }" />
    </div>
    <div class="cv-readycheck" :class="{ hide: isElementHidden }" id="test">
      <ReadyCheck :inputs="startInputs" @form-submitted="onFormSubmitted" />
    </div>
    <div class="cv-main" v-if="isCvMainVisible">
      <div class="navbar-wrapper">
        <NavbarMain :menuItems="menuItemsArray" />
      </div>
      <router-view />
    </div>
  </div>
  <FooterMain
    v-if="loginSuccessTemp === true"
    :content="contentData"
    :contact="contactData"
  />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import NavbarMain from "@/components/NavbarMain.vue";
import ReadyCheck from "@/components/ReadyCheck.vue";
import LoadingAnimatin from "@/components/LoadingAnimation.vue";
import FooterMain from "@/components/FooterMain.vue";
import LoginView from "@/views/LoginView.vue";

import axios from "axios";

export default {
  components: {
    NavbarMain,
    ReadyCheck,
    LoadingAnimatin,
    FooterMain,
    LoginView,
  },
  data() {
    return {
      loginSuccessTemp: false,
      loginFailed: false,

      loginButton: null,

      menuItemsArray: [
        {
          id: "item1",
          name: "Skill Matrix",
          path: "/person",
        },
        {
          id: "item2",
          name: "Sales Erfahrung",
          path: "/sales",
        },
        {
          id: "item3",
          name: "Coding Erfahrung",
          path: "/coding",
        },
        {
          id: "item4",
          name: "Selbstständigkeit",
          path: "/freelance",
        },
        {
          id: "item5",
          name: "Referenzen",
          path: "/reference",
        },
      ],
      startInputs: [
        {
          label: "Tee oder Kaffee frisch aufgebrüht?",
          icon: "fa-solid fa-mug-hot",
        },
        {
          label: "Notizblock bereit?",
          icon: "fa-sharp fa-solid fa-pen-to-square",
        },
        {
          label: "Die wichtigsten Personen sind anwesend?",
          icon: "fa-solid fa-people-group",
        },
      ],
      contentData: [],
      contactData: [
        {
          link: "https://www.linkedin.com/in/jean-pierre-h%C3%A4ussler-66019118a/",
          icon: "fa-brands fa-linkedin",
        },
        {
          link: "https://www.xing.com/profile/JeanPierre_Haeussler/cv",
          icon: "fa-brands fa-square-xing",
        },
        {
          link: "https://github.com/TapeMate",
          icon: "fa-brands fa-square-github",
        },
        {
          link: "https://soundcloud.com/tape-mate",
          icon: "fa-brands fa-soundcloud",
        },
      ],
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
      "isAnimationHidden",
      "isLoginHidden",
      "isLoginSuccess",
    ]),
  },
  mounted() {
    this.loginButton = document.querySelector("#login-button");
  },
  methods: {
    async handleLogin(credentials) {
      console.log("handle Login.");
      console.log("credentials:", credentials);

      try {
        const apiUrl = "http://20.218.146.83:3000/login";
        const response = await axios.post(apiUrl, credentials);
        console.log("Login successful:", response.data);
        this.loginSuccessTemp = true;

        this.$store.commit("loginSuccess");
        this.hideLogin();
      } catch (error) {
        console.error("Error during login:", error);
        this.loginSuccessTemp = false;

        if (!error.response) {
          console.error("Server not available.");
          alert(
            "Login Server ist nicht verfügbar. Bitte nehmen Sie Kontakt mit Ihrem Ansprechpartner auf."
          );
        } else if (error.response.status === 401) {
          this.enableTimeout();
          setTimeout(() => {
            this.loginFailed = false;
            this.enableLoginButton();
          }, 10000);
        }
      }

      console.log(this.loginSuccessTemp);
    },

    enableTimeout() {
      this.disableLoginButton();
      this.loginFailed = true;
      this.startCountdown();
    },

    startCountdown() {
      let seconds = 10;
      const timer = setInterval(function () {
        seconds--;

        const counter = document.querySelector("#countdown");
        counter.innerHTML = seconds;

        if (seconds <= 0) {
          clearInterval(timer);
          console.log("time is up.");
        }
      }, 1000);
    },

    disableLoginButton() {
      this.loginButton.disabled = true;
    },

    enableLoginButton() {
      this.loginButton.disabled = false;
    },

    hideLoadingAnimation() {
      this.hideAnimation();
      console.log("hide Loading now.");
    },

    ...mapMutations([
      "hideElement",
      "hideAnimation",
      "showElement",
      "showCvMain",
      "hideLogin",
      "loginSuccessTemp",
    ]),
    onFormSubmitted() {
      this.hideElement();
      this.showCvMain();
      this.hideAnimation();
    },
  },
};
</script>
