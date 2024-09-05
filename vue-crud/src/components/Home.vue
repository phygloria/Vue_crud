<template>
  <router-link to="/post/api/park">푸른공원</router-link> 
  <!-- 컴포넌트 안에서 라우터링크를 쓰면 해당페이지안에만 존재하는 링크생성 -->
   <!-- 라우터 인덱스에서 링크한 것들은 네비바가 되어 어디서든 존재함  -->
  <div>
      <h2>HOME</h2>
  </div>


  <div class="list row">
    <div class="col-md-8">
      <div class="input-group 3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle">
            Search
          </button>
        </div>
      </div>
    </div>


    <div>
      <h4>Posts List</h4>
      <ul class="list-ul">
        <li class="list-li"
          :class="{ active: index == currentIndex }"
          v-for="post in posts"
          :key="post.id"
          @click="setActivePosts( post.id, index )"
        >
          {{ post.title }}
          <router-link :to="'/post/${post.id}'"><button @click="postView">보기</button></router-link>
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentPost">
        <h4>Posts</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentPost.title }}
        </div>
        <div>
          <label><strong>text:</strong></label> {{ currentPosts.text }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentPosts.published ? "Published" : "Pending" }}
        </div>

        <router-link :to="'/posts/' + currentPosts.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Posts...</p>
      </div>
    </div>
  </div>
</template>

<script>
import CrudDataService from '@/services/CrudDataService';

export default {
  name: "postsList",
  data() {
    return {
      posts: [],
      currentPosts: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrievePosts() {
      CrudDataService.getAll()
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePosts();
      this.currentPost = null;
      this.currentIndex = -1;
    },

    setActivePosts(post, index) {
      this.currentpost = post;
      this.currentIndex = post ? index : -1;
    },
  
    searchTitle() {
      CrudDataService.findByTitle(this.title)
        .then(response => {
          this.posts = response.data;
          this.setActivePosts(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrievePosts();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>