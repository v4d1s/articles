<template>
  <div class="app">
    <div class="navbar">
      <h1>Articles</h1>
      <router-link class="router-link" to="/articles">Статьи</router-link>
      <router-link class="router-link" to="/article">Создать статью</router-link>
      <router-link class="router-link" to="/analytic/comments">Анализ комментариев</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
//#app {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//  color: #2c3e50;
//}

.app {
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 60em
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

//nav a.router-link-exact-active {
//  color: #42b983;
//}

.navbar {
  width: 100%;
  height: 50px;
  background-color: bisque;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.router-link {
  padding: 15px 10px;
  color: black;
  font-size: 18px;
}
</style>
<script setup lang="ts">
</script>