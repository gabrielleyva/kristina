
<script>
import Story from '../components/Story.vue'
import Title from '../components/Title.vue'
import stories from '../assets/story.json';

export default {
  name: 'MyStory',
  components: {
    Story,
    Title
  },
  data() {
    return {
      stories: stories,
    };
  }
};
</script>

<template>
  <div class="appear my-story">
    <Title title="My Story"></Title>
    <div class="stories-container">
      <div class="main-story-container" v-for="story, index in stories" :key="story">
        <Story :story="story" :index="index"></Story>
      </div>
    </div>
  </div>
</template>
  
<style>
.my-story {
  position: relative;
  top: 0;
  text-align: center;
  width: 1024px;
  display: inline-block;
  margin: 0 auto;
  height: 100%;
}

.stories-container {
  margin: 0 auto;
  display: inline-block;
}

.main-story-container:nth-child(odd) {
  background-color: var(--main-background-color);
}

.main-story-container:nth-child(even) {
  background-color: var(--tile-background-color);
}

/**
Tablet / Mobile
*/
@media screen and (max-width: 768px) {
.my-story {
  position: relative;
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  margin: 0 auto;
}

.stories-container {
  padding-bottom: 50px;
}
}
</style>
  