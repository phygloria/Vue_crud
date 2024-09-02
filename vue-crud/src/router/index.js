import { createRouter, createWebHistory } from 'vue-router'
import List from '@/components/List.vue'
import Add from '@/components/Add.vue'
import Update from '@/components/Update.vue'
import Delete from '@/components/Delete.vue'
import HomeView from '@/views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/postList',
      name: 'List',
      component: List
    },
    {
      path: '/posts',
      name: 'Add',
      component: Add
    },
    {
      path: '/posts/:id',
      name: 'Update',
      component: Update
    },
    {
      path: '/posts/postDelete/:id',
      name: 'Delete',
      component: Delete
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})


export default router
