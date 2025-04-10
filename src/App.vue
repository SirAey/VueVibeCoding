<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import WelcomeItem from './components/WelcomeItem.vue'
import DocumentationIcon from './components/icons/IconDocumentation.vue'
import ToolingIcon from './components/icons/IconTooling.vue'
import EcosystemIcon from './components/icons/IconEcosystem.vue'
import CommunityIcon from './components/icons/IconCommunity.vue'
import SupportIcon from './components/icons/IconSupport.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="Vibe Coding?" />

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/new-page">New Page</RouterLink>
      </nav> -->
      <nav>
        <WelcomeItem>
          <template #icon>
            <DocumentationIcon />
          </template>
          <!--  <template #heading>Vibe Coding ?</template> -->
          <RouterLink to="/topic-0">Intro</RouterLink>
        </WelcomeItem>
        <WelcomeItem>
          <template #icon>
            <DocumentationIcon />
          </template>
          <!--  <template #heading>Vibe Coding ?</template> -->
          <RouterLink to="/topic-1">What is Vibe Coding?</RouterLink>
        </WelcomeItem>
        <WelcomeItem>
          <template #icon>
            <ToolingIcon />
          </template>
          <!-- <template #heading>about</template> -->
          <RouterLink to="/topic-2">Tools for vibe coding</RouterLink>
        </WelcomeItem>
        <WelcomeItem>
          <template #icon>
            <EcosystemIcon />
          </template>
          <!-- <template #heading>Topic 4</template> -->
          <RouterLink to="/topic-7">Show Case</RouterLink>
        </WelcomeItem>
        <WelcomeItem>
          <template #icon>
            <CommunityIcon />
          </template>
          <!-- <template #heading>New Page</template> -->
          <RouterLink to="/topic-3">Software Engineer still needed ?</RouterLink>
        </WelcomeItem>

        <WelcomeItem>
          <template #icon>
            <SupportIcon />
          </template>
          <!-- <template #heading>Post-test</template> -->
          <RouterLink to="/topic-8">Post-test</RouterLink>
        </WelcomeItem>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 200%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

a {
  color: var(--color-text);
  font-size: 10px;
}

a:hover {
  /* background-color: hsla(160, 100%, 37%, 0.068);*/
  margin: 0 30px;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
  margin: 20px 0 20px 20px;
  font-size: 15px;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
