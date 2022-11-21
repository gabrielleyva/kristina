<script>
import GalleryCard from '../components/GalleryCard.vue'
import Title from '../components/Title.vue'

const photos = []

for (let i = 1; i <= 12; i++) {
  const name = `k-${i}`
  photos.push(name)
}

export default {
  name: 'Gallery',
  components: {
    GalleryCard,
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
      <div class="gallery-grid-col" v-for="photo in photos" :key="photo">
        <GalleryCard class="gallery-grid-item" :photo="photo"></GalleryCard>
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
  margin-bottom: 32px;
}

.gallery-grid-container {
  padding: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  column-gap: 10px;
  row-gap: 10px;
}

.gallery-grid-col {
  display: flex;
  flex: 1;
  align-self: center;
  align-items: center;
  justify-content: center;
}

.gallery-grid-item {
  flex-grow: 1;
  border: 10px solid var(--gallery-border-color);
}

/**
Tablet / Mobile
*/
@media screen and (max-width: 768px) {
  .gallery {
    position: relative;
    display: inline-block;
    text-align: center;
    width: 100vw;
    height: 100vh;
  }

  .gallery-grid-container {
    padding-bottom: 50px;
  }
}
</style>
