<template>
  <div>
    <h2>All Items</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
        <button @click="editItem(post)">Edit</button>
        <button @click="deleteItem(post.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const posts = ref([]);

    // const editItem = (item) => {
    //   // Implement edit functionality
    // };

    // const deleteItem = (itemId) => {
    //   // Implement delete functionality
    // };

    onMounted(() => {
        axios.get('http://localhost:8083/api/postList').then((response) => {
            this.posts = response.data;
        });
      // Fetch items from the server or an API
      // and assign them to the 'items' ref
    });

    return {
      posts,
      // editItem,
      // deleteItem,
    };
  },
};
</script>
