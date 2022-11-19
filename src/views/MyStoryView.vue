
<script>
import Story from '../components/Story.vue'
import stories from '../assets/story.json';

export default {
  name: 'MyStory',
  components: {
    Story
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
    <div class="story-title-container">
      <h2>
        My Story
      </h2>
    </div>
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

.story-title-container {
  padding: 8px;
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
</style>
  