<template>
  <footer class="footer-main">
    <div class="footer-contact">
      <h5>Kontakt:</h5>
      <ul>
        <li v-for="(item, index) in contact" :key="index">
          <a :href="item.link"><i :class="item.icon"></i></a>
        </li>
      </ul>
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
