<template>
  <header class="starter-topic">
    <img alt="Vibe Coding " src="@/assets/vibe_coding.png" width="100%" height="100%" />

    <!-- <HelloWorld msg="Vibe Coding?" /> -->
  </header>
</template>

<!-- <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->

<script setup lang="ts">
/* import HelloWorld from '../components/HelloWorld.vue' */
</script>

<style>
.starter-topic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90em;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
  }

  p {
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    color: #ffc8c8;
  }

  a {
    color: rgb(189, 0, 0);
    font-size: 10px;
    margin: 10px 10px 50px 10px;
  }

  a:hover {
    color: rgb(255, 0, 0);
    cursor: pointer;
    text-shadow: 1px 1px 10px rgba(255, 151, 151, 0.295);
  }

  .twitter-tweet {
    width: 500px;
    /* text-align: center; */
  }
}
</style>
