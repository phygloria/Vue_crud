<template>
    <div>
      <h2>Delete Item</h2>
      <p>Are you sure you want to delete this post?</p>
      <button @click="confirmDelete">Yes</button>
      <button @click="cancelDelete">No</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      confirmDelete() {
        // Implement delete functionality
      },
      cancelDelete() {
        // Navigate back to the list view or close the modal
      },
    },
  };
  </script>