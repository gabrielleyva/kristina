<script>
import Title from '../components/Title.vue'

export default {
  name: 'Philanthropy',
  components: {
    Title
  }
};
</script>


<template>
  <div class="appear contact">
    <Title title="Contact"></Title>
    <div class="contact-container">
      <div class="contact-info">
        <div>
          <h1> LET'S TALK </h1>
        </div>
        <div>
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
            </svg>
            <a href="mailto:missuniversearmenia@gmail.com">missuniversearmenia@gmail.com</a>
          </div>
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <a href="https://www.instagram.com/kristinaayanian/">@kristinaayanian</a>
          </div>
          <div class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
            </svg>
            <a href="https://www.linkedin.com/in/kristina-ayanian-64b752114/">Client Experience Lead @NASDAQ</a>
          </div>
        </div>
      </div>
      <div class="contact-image">
        <!-- <img src="/k-2.JPG"> -->
      </div>
    </div>
  </div>

</template>
  
<style>
.contact {
  position: relative;
  top: 0;
  text-align: center;
  width: 1024px;
  height: 100vh;
  display: inline-block;
  margin: 0 auto;
}

.contact-container {
  display: flex;
}

.contact-info {
  text-align: left;
  flex: 1;
}

.contact-item {
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 10px;
  padding: 8px;
}

.contact-item a {
  color: var(--a-color);
}

.contact-item a:link {
  text-decoration: none;
  color: var(--a-color);
}

.contact-item a:visited {
  color: var(--a-color);
  ;
}

.contact-item a:hover {
  color: var(--link-hover-color);
}

.contact-item svg {
  fill: var(--icon-color);
}

.contact-image {
  flex: 1;
  border: 10px solid var(--gallery-border-color);
  background-image: var(--contact-cover-image);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 400px;
}

/**
Tablet / Mobile
*/
@media screen and (max-width: 768px) {
  .contact {
    position: relative;
    top: 0;
    text-align: center;
    width: 100vw;
    height: 100vh;
    display: inline-block;
    margin: 0 auto;
    text-align: left;
  }

  .contact-container {
    display: inline-block;
    margin: 0 auto;
    margin-left: 8px;
  }

  .contact-image {
    margin-top: 32px;
    width: 90vw;
    max-height: 200px;
    background-size: cover;
  }
}
</style>