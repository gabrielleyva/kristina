<script>
import Title from '../components/Title.vue'
import philanthropies from '../assets/philanthropy.json'

export default {
  name: 'Philanthropy',
  components: {
    Title
  },
  data() {
    return {
      philanthropies: philanthropies,
    };
  }
};
</script>

<template>
  <div class="appear philanthropy">
    <Title title="Philanthropy"></Title>
    <div class="main-philanthropy-container" v-for="philanthropy, index in philanthropies" :key="philanthropy">
      <div class="philanthropy-header">
        <div v-if="philanthropy.logo" class="p-logo">
          <img :src="philanthropy.logo">
        </div>
        <div class="p-title">
          <h1>{{ philanthropy.title }}</h1>
        </div>
      </div>
      <div class="philanthropy-body">
        <p>{{ philanthropy.text }}</p>
      </div>
      <div v-if="philanthropy.images" class="philanthropy-images">
        <div class="philanthropy-col" v-for="image in philanthropy.images" :key="image">
          <div class="philanthropy-grid-item">
            <img :src="image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style>
.philanthropy {
  position: relative;
  top: 0;
  text-align: center;
  width: 1024px;
  height: 100vh;
  display: inline-block;
  margin: 0 auto;
}

.main-philanthropy-container {
  padding: 24px;
  margin-top: 32px;
  background-color: var(--tile2-background-color);
}

.philanthropy-header {
  display: flex;
  align-items: center;
}

.p-logo {
  flex: 1;
  min-width: 75px;
  max-width: 100px;
  margin-right: 16px;
}

.p-logo img {
  width: 100%;
  height: 100%;
}

.p-title {
  flex: 1;
}

.philanthropy-images {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
}

.philanthropy-col {
  display: flex;
  flex: 1;
}

.philanthropy-grid-item {
  width: 200px;
  border: 10px solid white;
}

.philanthropy-grid-item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/**
Tablet / Mobile
*/
@media screen and (max-width: 768px) {
  .philanthropy {
    position: relative;
    top: 0;
    text-align: center;
    width: 100vw;
    display: inline-block;
    margin: 0 auto;
    height: 100vh;
  }

  .philanthropy-header {
  display: flex;
  align-items: top;
}

  .philanthropy-images {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: scroll;
    column-gap: 8px;
  }

  .philanthropy-col {
    display: flex;
    flex: 1;
    max-height: 200px;
  }
}
</style>