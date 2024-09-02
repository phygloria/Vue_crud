<template>
    <div>
      <h2>Add New Item</h2>
      <form @submit.prevent="addItem">
        <label for="itemName">Item Name:</label>
        <input type="text" id="itemName" v-model="newItemName" required />
        <button type="submit">Add Item</button>
      </form>
    </div>
  </template>
  
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const newItemName = ref('');
    const router = useRouter();

    const addItem = () => {
      axios.post('http://localhost:8083', { name: newItemName.value }).then(() => {
        // Clear the input field after adding the item
        newItemName.value = '';
        // Optionally, navigate to the list view
        router.push('/');
      });
    };

    return {
      newItemName,
      addItem,
    };
  },
};
</script>