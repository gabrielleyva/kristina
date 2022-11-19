<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
      <nav>
        <div class="initials">Kristina Ayanian</div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/myStory">My Story</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/press">Press</RouterLink>
        <RouterLink to="/philanthropy">Philanthropy</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
  </header>

  <body>
    <RouterView />
    <footer>
        <div>
          <div class="footer-item">Kristina Ayanian © 2022 Copyright</div>
          <div class="footer-item">•</div>
          <div class="footer-item"> Made with love ❤️ </div>
        </div>
    </footer>
  </body>
</template>

<style scoped>
/**
Header Styles
*/
header nav {
  padding: 16px;
  font-size: 12px;
  text-align: left;
  background-color: transparent;
  background-color: var(--header-background-color);
}

header nav a {
  padding: 0 16px;
  border-left: 1px solid var(--divider-color);
}

/**
Footer Styles
*/
footer {
  padding: 8px;
}

.initials {
  display: inline;
  padding: 0 8px;
  font-family: santorini;
  font-weight: bolder;
}

.footer-item {
  display: inline-block;
  padding: 4px;
  font-size: 12px;
  color: var( --footer-text-color);
}

</style>
