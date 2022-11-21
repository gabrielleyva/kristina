<template>
    <div class="welcome">
        <div class="welcome-card appear">
            <div class="welcom-box-info appear">
                <div class="title-section">
                    <h1>Kristina Ayanian</h1>
                </div>
                <div class="subtitle-section">
                    <h2>This is my story...</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.welcome {
    position: relative;
    height: calc(100vh - 110px);
    /* Account for header and footer padding */
    width: 100%;
}

.welcome-card {
    width: 1024px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -250px 0 0 -512px;

    background-image: var(--cover-image);
    background-size: var(--cover-image-size);
    background-repeat: no-repeat;
    background-position: var(--cover-imgae-position);
    background-color: var(--cover-image-background-color);
}

.welcom-box-info {
    position: fixed;
    bottom: 0;
    left: 0;
    right: auto;
    border: 5px solid var(--main-border-color);
    padding: 10px;
    text-align: left;
    background-color: transparent;
}

.subtitle-section h2 {
    display: inline-block;
}

/**
Dark Mode
*/
@media (prefers-color-scheme: dark) {
    .welcom-box-info {
        right: 0;
        left: auto;
    }
}

/**
Tablet / Mobile
*/
@media screen and (max-width: 768px) {

    .welcome {
        position: relative;
        height: 100vh;
        width: 100vw;
    }

    .welcome-card {
        width: 100vw;
        height: 90vh;
        position: absolute;

        top: 0;
        left: 0;
        margin: 0 auto;

        background-image: var(--cover-image);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: var(--cover-imgae-position);
        background-color: var(--cover-image-background-color);
    }

    .welcom-box-info {
        position: fixed;
        top: 0;
        left: 0;
        bottom: auto;
        border: 5px solid var(--main-border-color);
        padding: 10px;
        text-align: left;
        background-color: transparent;
    }

    .subtitle-section h2 {
        display: inline-block;
    }
}
</style>
