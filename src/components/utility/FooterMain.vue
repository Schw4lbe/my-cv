<template>
  <footer class="footer-main">
    <div class="footer-contact">
      <ul>
        <li v-for="(item, index) in items" :key="index">
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
    items: Array,
  },
};
</script>
