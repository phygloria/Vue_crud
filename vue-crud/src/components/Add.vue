<template>
  <div v-if="!submitted">
    <div class="submit-form">
      <h2>Add New Post</h2>
        <!-- form태그와 submit버튼의 관계: form태그 안에 submit이 있어야 데이터가 등록됩니다. -->
        <!-- <form @submit.prevent="addPosts">  -->
        <label for="postTitle">제목 : </label>
        <input type="text" class="titleInput" id="title" v-model="post.title"  name="title" required />
        <br>
        <label for="postText">내용 : </label>
        <input type="text" class="textInput" id="text" v-model="post.text"  name="text"  required />
        <!-- </form> -->
      <button @click="savePost" class="btn btn-success"> Add Post </button>
    </div>
  </div>
  <div v-else>
    <h4>You submitted successfully!</h4>
    <button class="btn btn-success" @click="newPost"> Add </button>
  </div>    
</template>

<script>
// import CrudDataService from '@/services/CrudDataService';
import axios from 'axios';

export default {
  name: "add-posts",
  data() {
    // 초기화된 값 반환
    return {
      post: {
        id: null,
        title: "",
        text: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    savePost() {
      axios.post('http://localhost:8083/api/posts', 
      { title : this.title,
        text: this.text
       }).then((response) => {
        // Clear the input field after adding the item
        this.title = '';
        this.text = '';
        console.log(response.data);
        // Optionally, navigate to the list view
        this.$router.push('/postList');
      });

    },
    newPost() {
      this.submitted = false;
      this.posts = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>