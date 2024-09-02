<template>
    <div>
      <h2>All Items</h2>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }}
          <button @click="editItem(item)">Edit</button>
          <button @click="deleteItem(item.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const items = ref([]);
  
      const editItem = (item) => {
        // Implement edit functionality
      };
  
      const deleteItem = (itemId) => {
        // Implement delete functionality
      };
  
      onMounted(() => {
          axios.get('http://localhost:8083').then((response) => {
              this.items = response.data;
          });
        // Fetch items from the server or an API
        // and assign them to the 'items' ref
      });
  
      return {
        items,
        editItem,
        deleteItem,
      };
    },
  };
  </script>
  