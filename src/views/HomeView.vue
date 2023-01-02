<template>
    <div class="vote-section">
        <div class="vote-for-me">
            <h1>
                Vote For Armenia 🇦🇲
            </h1>
        </div>
        <div class="app-store-section">
            <img class="mu-logo" src="../assets/img/mu-logo.webp">
            <div class="app-store-logos">
                <p><a href="https://play.google.com/store/apps/details?id=com.choicely.missuniverse&hl=en_US&gl=US">
                        <img src="../assets/img/google-store.svg.png" alt="Google PlayStore">
                    </a></p>
                <p><a href="https://apps.apple.com/us/app/miss-universe/id1557255641">
                        <img src="../assets/img/apple-store.png" alt="Apple AppStore">
                    </a></p>
            </div>
        </div>
        <div class="download">
            <h3>
                Download the Miss Universe App
            </h3>
        </div>
    </div>
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
.vote-section {
    text-align: center;
}

.vote-for-me {
    width: 1024px;
    display: inline-block;
    text-align: center;
}

.vote-for-me h1 {
    text-align: center;
}

.vote-for-me img {
    width: 100px;
    height: auto;
    float: left;
}

.download h3 {
    text-align: center;
}

.app-store-section img {
    width: 50px;
    height: auto;
    border-radius: 10px;
    /* margin: 8px; */
}

.app-store-logos p {
    display: inline;
}

.app-store-logos img {
    width: 120px;
    height: auto;
    padding: 8px;
}

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
    top: 40%;
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

    .vote-section {
        margin-top: 16px;
    }
    .vote-for-me {
        width: 100vw;
    } 

    .vote-for-me h1 {
        font-size: 28px;
    }
}
</style>
