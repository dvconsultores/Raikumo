<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
    style="background-color: black"
  >
    <div class="container">
      <nav></nav>
      <div class="copyright">
        &copy; {{ year }},
        <a href="https://near.org" target="_blank">
          Built on NEAR
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
