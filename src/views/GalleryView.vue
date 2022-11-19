<script>
import Gallery from '../components/Gallery.vue'
import Title from '../components/Title.vue'

const photos = []

for (let i = 1; i <= 12; i++) {
  const name = `k-${i}`
  photos.push(name)
}

export default {
  name: 'home',
  components: {
    Gallery,
    Title
  },
  data() {
    return {
      photos: photos,
    };
  },
};
</script>

<template>
  <div class="gallery appear">
    <Title title="The Gallery"></Title>
    <div class="gallery-grid-container">
      <div class="gallery-panel" v-for="photo in photos" :key="photo">
        <Gallery :photo="photo"></Gallery>
      </div>
    </div>
  </div>
</template>

<style>
.gallery {
  position: relative;
  top: 0;
  text-align: center;
  width: 1024px;
  display: inline-block;
  margin: 0 auto;
  height: 100%;
}

.gallery-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 1024px;
  margin: 1rem auto;
  padding: 0 1rem;
  align-items: center;
}

.gallery-panel img {
  align-self: center;
  width: 100%;
  object-fit: cover;
  height: 100%;
  scale: 1.2;
  translate: 0 0;
}
</style>
