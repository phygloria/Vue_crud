<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/postList">List</RouterLink>
        <RouterLink to="/posts">Add</RouterLink>
        <RouterLink to="/posts/postUpdate/:id">Update</RouterLink>
        <RouterLink to="/posts/postDelete/:id">Delete</RouterLink>
      </nav>


  <RouterView />

</template>

<style scoped>

</style>
