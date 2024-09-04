<template>
  <nav class="navbar navbar-dark navbar-expand-md bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <!-- <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
                aria-current="page"
                @click="closeOffcanvas"
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
                @click="closeOffcanvas"
              >
                {{ item.name }}
              </router-link>
            </li>
            <li class="nav-item nav-toggle-theme">
              <ToggleThemeBtn />
            </li>
            <li class="nav-item nav-toggle-lang">
              <ToggleLangBtn />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Offcanvas } from "bootstrap"; // Import Offcanvas directly
import ToggleLangBtn from "@/components/utility/ToggleLangBtn.vue";
import ToggleThemeBtn from "@/components/utility/ToggleThemeBtn.vue";

export default {
  name: "NavbarMain",
  components: {
    ToggleLangBtn,
    ToggleThemeBtn,
  },
  props: {
    navbarItems: Array,
  },

  methods: {
    // instantiate offcanvas and control navbar collapse on menu item click
    closeOffcanvas() {
      const offcanvasElement = document.getElementById("offcanvasNavbar");
      let offcanvasInstance = Offcanvas.getInstance(offcanvasElement);
      if (!offcanvasInstance) {
        offcanvasInstance = new Offcanvas(offcanvasElement);
      }

      offcanvasInstance.hide();
    },
  },
};
</script>
