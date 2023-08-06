<template>
  <footer class="footer-main">
    <div class="footer-grid-container">
      <div class="footer-content">
        <h5></h5>
        <ul>
          <li>
            <a href=""><i></i></a>
          </li>
        </ul>
      </div>
      <div class="footer-contact">
        <h5></h5>
        <ul>
          <li>
            <a href=""><i></i></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterMain",
  props: {
    content: Array,
    contact: Array,
  },
};
</script>
