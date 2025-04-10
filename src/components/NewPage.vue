<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <div class="new-page">
    <!-- <h1>This is a New Page</h1> -->
    <!-- <div>
      <p lang="en" dir="ltr">
        There's a new kind of coding I call "vibe coding", where you fully give in to the vibes,
        embrace exponentials, and forget that the code even exists. It's possible because the LLMs
        (e.g. Cursor Composer w Sonnet) are getting too good. Also I just talk to Composer with
        SuperWhisper so I barely even touch the keyboard. I ask for the dumbest things like
        "decrease the padding on the sidebar by half" because I'm too lazy to find it. I "Accept
        All" always, I don't read the diffs anymore. When I get error messages I just copy paste
        them in with no comment, usually that fixes it. The code grows beyond my usual
        comprehension, I'd have to really read through it for a while. Sometimes the LLMs can't fix
        a bug so I just work around it or ask for random changes until it goes away. It's not too
        bad for throwaway weekend projects, but still quite amusing. I'm building a project or
        webapp, but it's not really coding - I just see stuff, say stuff, run stuff, and copy paste
        stuff, and it mostly works.
      </p>

      <a href="https://twitter.com/karpathy/status/1886192184808149383?ref_src=twsrc%5Etfw"
        >&mdash; Andrej Karpathy (@karpathy) 6:17 AM · Feb 3, 2025</a
      >
    </div> -->
    <WelcomeItem>
      <template #heading>Ecosystem</template>
      Get official tools and libraries for your project:
      <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
      <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
      <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
      <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>.
      If you need more resources, we suggest paying
      <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
      a visit.
    </WelcomeItem>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .new-page {
    /* margin-top: 20px; */
    /* margin-bottom: 50px; */
    min-height: 100vh;
    /* display: grid; */
    align-items: center;
  }
}
</style>
