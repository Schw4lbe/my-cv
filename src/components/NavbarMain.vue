<template>
  <nav class="navbar navbar-dark navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              :to="homeLink"
              class="nav-link"
              aria-current="page"
              @click="collapseNavbar"
            >
              Home
            </router-link>
          </li>
          <li
            v-for="item in navbarItems"
            :key="item.id"
            :id="item.id"
            class="nav-item"
          >
            <router-link
              :to="item.path"
              class="nav-link"
              @click="collapseNavbar"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <ToggleButton />
  <LogoutButton />
</template>

<script>
import router from "@/router";
import ToggleButton from "@/components/ToggleButton.vue";
import LogoutButton from "@/components/LogoutButton.vue";

export default {
  name: "NavbarMain",
  components: {
    ToggleButton,
    LogoutButton,
  },
  props: {
    navbarItems: Array,
  },
  data() {
    return {
      homeLink: router.options.routes[0],
    };
  },

  // workaround due to vue router conflict with bootstrap js.
  methods: {
    collapseNavbar() {
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbar-collapse");
      console.log(navbarCollapse);
      if (!navbarToggler.classList.contains("collapsed")) {
        navbarToggler.classList.add("collapsed");
      }
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    },
  },
};
</script>
