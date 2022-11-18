
<script>
import stories from '../assets/story.json';

export default {
  name: 'MyStory',
  data() {
    return {
      stories: stories,
    };
  }
};

</script>

<template>
    <div class="info-wrapper">
      <div class="paragraph"
           v-for="story, index in stories"
           :key="story">
           <div v-if="index % 2 == 1" class="image-section">
                <img :src="story.image">
            </div>
            <div class="info-section">
                <h1>{{story.title}}</h1>
                <p>{{story.text}}</p>
            </div>
            <div v-if="index % 2 == 0" class="image-section">
                <img :src="story.image">
            </div>
      </div>
    </div>
</template>

<style>

.info-wrapper {
    text-align: center;
    align-items: center;
    align-items: center;
    align-items: center;
    justify-content: center;
}
.paragraph {
    display: flex;
    text-align: left;
    column-gap: 24px;
    white-space: pre-wrap;
    max-width: 1024px;
    margin-bottom: 32px;    
}

.paragraph:nth-child(odd) {
    background-color: var(--main-background-color);
}

.paragraph:nth-child(even) {
    background-color: var(--tile-background-color);
}

.paragraph img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.info-section {
    flex-grow: 1;
}

.info-section p {
    padding: 8px;
}

.image-section {
    flex-grow: 1;
    overflow: hidden;
}
</style>