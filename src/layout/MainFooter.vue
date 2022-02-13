<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
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
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
