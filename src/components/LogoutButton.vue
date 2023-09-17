<template>
  <div class="logout-container">
    <button @click="onClickLogout" class="logout-button">
      <i class="fa-solid fa-right-from-bracket"></i><span>LOGOUT</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "LogoutButton",

  methods: {
    onClickLogout() {
      console.log("logout clicked.");
      localStorage.clear();
      sessionStorage.clear();
      location.reload();
    },
  },
};
</script>
