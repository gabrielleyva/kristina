

<template>
  <div class="welcome">
      <div class="center appear">
          <div class="title-section">
              <h1>Kristina Ayanian</h1>
          </div>
          <div class="subtitle-section">
              <h2>This is my story...</h2>
          </div>
      </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
    .welcome {
        min-height: 90vh;
        align-items: center;
        text-align: center;
        background-image: url('../assets/img/header.png');
        background-repeat: no-repeat;
        background-position: bottom right;
        background-color: #e9edf0;
    }

    .center {
        position: absolute;
        top: 40%;
        margin-left: 0%;
        transform: translate(0, -50%);
        border: 5px solid #E5E4E2;
        padding: 10px;
        text-align: left;
    }

    .title-section {
      background-color: transparent;
    }

    .subtitle-section {
      background-color: transparent;
    }

    .subtitle-section h2 {
        display: inline-block;
    }
  
}
</style>
