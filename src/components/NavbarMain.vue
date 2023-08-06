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
            <router-link :to="homeLink" class="nav-link" aria-current="page">
              Home
            </router-link>
          </li>
          <li
            v-for="item in menuItems"
            :key="item.id"
            :id="item.id"
            class="nav-item"
          >
            <router-link :to="item.path" class="nav-link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "@/router";

export default {
  name: "NavbarMain",
  props: {
    menuItems: Array,
  },
  data() {
    return {
      homeLink: router.options.routes[0],
    };
  },
};
</script>
