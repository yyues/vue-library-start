<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { Avatar } from 'x-library';
</script>

<template>
  <div>
    <!-- <Avatar style="width: 120px; height: 60px" :src="ImgUrl"></Avatar> -->
    <Avatar
      prefix="https://avatars.githubusercontent.com"
      src="/u/19205482?v=4"
    ></Avatar>
    <!-- <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a> -->
    <!-- <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
