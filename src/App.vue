<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';

</script>

<template>
  <header>
    <NavbarVue></NavbarVue>
  </header>

  <body>
    <RouterView />
    <footer>
        <div>
          <div class="footer-item">Kristina Ayanian © 2023 Copyright</div>
          <div class="footer-item">•</div>
          <div class="footer-item"> Made with love ❤️ </div>
        </div>
    </footer>
  </body>
</template>

<style scoped>

/**
Footer Styles
*/
footer {
  padding: 8px;
}

.footer-item {
  display: inline-block;
  padding: 4px;
  font-size: 12px;
  color: var( --footer-text-color);
}

</style>
