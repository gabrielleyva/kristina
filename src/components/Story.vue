
<script>

export default {
    name: 'Story',
    props: ['story', 'index'],
};

</script>

<template>
    <div class="story">
        <div v-if="index % 2 == 1" class="story-image-container">
            <img :src="story.image">
        </div>
        <div class="story-info">
            <h1>{{ story.title }}</h1>
            <p>{{ story.text }}</p>
        </div>
        <div v-if="index % 2 == 0" class="story-image-container">
            <img :src="story.image">
        </div>
    </div>
</template>

<style>
.story {
    display: flex;
    text-align: left;
    column-gap: 24px;
    white-space: pre-wrap;
    max-width: 1024px;
    margin-bottom: 32px;
}

.story-info {
    flex-grow: 1;
    padding: 8px;
}

.story-image-container {
    flex-grow: 1;
    min-width: 300px;
    overflow: hidden;
}

.story img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/**
Tablet / Mobile
*/
@media screen and (max-width: 768px) {
.story {
    max-width: 768px;
    flex-direction: row;
    flex-wrap: wrap;
}

.story-image-container {
    min-width: 100px;
}
}
</style>