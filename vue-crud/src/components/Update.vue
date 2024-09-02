<template>
    <div>
      <h2>Update Item</h2>
      <form @submit.prevent="updateItem">
        <label for="updateItemName">Item Name:</label>
        <input type="text" id="updateItemName" v-model="updateItemName" required />
        <button type="submit">Update Item</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import axios from 'axios';
  
  export default {
    setup() {
      const updateItemName = ref('');
      const router = useRouter();
      const route = useRoute();
      const itemId = route.params.id;  // Assuming the item's ID is passed as a route parameter
  
      const updateItem = () => {
        axios.put(`http://localhost:8083/${itemId}`, { name: updateItemName.value })
          .then(() => {
            // Optionally, navigate to the list view or another page after update
            router.push('/');
          })
          .catch((error) => {
            console.error('Failed to update item:', error);
          });
      };
  
      return {
        updateItemName,
        updateItem,
      };
    },
  };
  </script>
  