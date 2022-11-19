<script>

export default {
    name: 'Title',
    props: ['title'],
};

</script>

<template>
    <div class="title-container">
        <h2>{{ title }}</h2>
    </div>
</template>

<style>
.title-container {
    padding: 8px;
}
</style>