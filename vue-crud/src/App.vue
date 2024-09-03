<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 

 <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Add</RouterLink>
  </nav>

  <RouterView />

</template>

<style scoped>

</style>
