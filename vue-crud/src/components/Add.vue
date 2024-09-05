<template>
  <div v-if="!submitted">
    <div class="submit-form">
      <h2>Add New Post</h2>
      <!-- form태그와 submit버튼의 관계: form태그 안에 submit이 있어야 데이터가 등록됩니다. -->
      <form @submit.prevent="addPosts"> 
        
        <label for="postTitle">제목 : </label>
        <input type="text" class="titleInput" id="title" v-model="post.title"  name="title" required />
        
        <br>
        
        <label for="postText">내용 : </label>
        <input type="text" class="textInput" id="text" v-model="post.text"  name="text"  required />
        
        <br>

        <input type="file" id="upload-image" hidden @change="onFileSelected" accept="image/png, image/jpeg, image/jpg"/>
        <label for="upload-image">
          이미지 :   <br>
          <img class="imageUpIcon" @change="uploadImage" src="@/assets/images/icon_upload.png"/>
        </label>
        
        <div v-if="previewUrl">
          <img :src="previewUrl" alt="Preview" style="max-width: 300px;">
        </div>
        <div v-if="uploadStatus">{{ uploadStatus }}</div>

        <br>

        <button type="submit" :disabled="!selectedFile">ADD POST</button>

      </form>
    </div>
  </div>


  <div v-else>
    <h4>You submitted successfully!</h4>
    <button class="btn-success" @click="newPost"> Add </button>
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
      submitted: false,
      selectedFile: null,
        previewUrl: null,
        uploadStatus: ''
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
    },
    async onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.createPreview();
    },
    createPreview() {
        if (this.selectedFile){
          // 업로드된 파일을 읽기 위한 FileReader() 객체 생성
          const reader = new FileReader();
          reader.onload = (e) => {
            this.previewUrl = e.target.result;
          };
          reader.readAsDataURL(this.selectedFile);
      }
    },
    async uploadImage() {
      if (!this.selectedFile){
        this.uploadStatus = '파일을 선택해주세요.';
        return;
      }

      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);

      try {
        const response = await axios.post('/api/upload', formData, {
          headers: {
            'content-Type': 'multipart/form-data'
          }
        });
        this.uploadStatus = '업로드 성공! : ' + response.data.message;
        //필요한경우 추가 처리(ex: 업로드된 이미지 url저장)
      } catch (error) {
        this.uploadStatus = '업로드 실패! : ' + error.message;
      }
    }      
  }  
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
.imageUpIcon {
  width: 100px; 
  height:auto; 
  opacity: 30%; 
  border: 1px black;
}
</style>