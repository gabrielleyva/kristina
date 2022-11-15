<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div>
      <nav>
        <div class="initials">Kristina Ayanian</div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/myStory">My Story</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/philanthropy">Philanthropy</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <body>
    <RouterView />
  </body>
  <footer>
    <div>
      <nav>
        <div class="footer-item">Kristina Ayanian © 2022 Copyright</div>
        <RouterLink to="/contact">Contact</RouterLink>
        <div class="footer-item"> Made with love ❤️ </div>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.initials {
  display: inline;
  padding: 0 1rem;
  font-family: santorini;
  font-weight: bolder;
}

header nav {
  width: 100%;
  padding-top: 2vw;
  padding-bottom: 2vw;
  font-size: 12px;
  text-align: left;
}

header nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  header {
    display: block;
    place-items: center;
  }
}

footer {
  width: 100%;
  padding-top: 2vw;
  padding-bottom: 2vw;
  font-size: 12px;
  text-align: center;
}

footer nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
}

.footer-item {
  display: inline-block;
  padding: 0 1rem;
  font-size: 12px;
  color: #898889;
}
</style>
