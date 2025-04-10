<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <RouterLink to="/">{{ msg }}</RouterLink>
    <!-- <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3> -->
  </div>
</template>

<style scoped>
a:hover {
  /* background-color: hsla(160, 100%, 37%, 0.068);*/
  margin: 0px !important;
}

a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
  /* margin: 20px 0 20px 20px; */
  /* font-size: 15px; */
}

a,
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
