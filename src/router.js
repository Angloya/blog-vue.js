import Vue from 'vue'
import Router from 'vue-router'
import addBlog from './views/addBlog.vue'
import singleBlog from './components/singleBlog.vue'
import myPosts from './components/user/myPost.vue'
import changeBlog from './views/changeBlog.vue'
import notFound from './views/NotFound.vue'
import searchCategory from './components/searchCategory.vue'
import authUser from './views/authUser.vue'
import Profile from './views/profile.vue'
const Signup = () => import('@/components/user/Signup')
const Signin = () => import('@/components/user/Signin')
const Home = () => import('@/views/Home.vue')
const showBlogs = () => import('@/components/showBlogs.vue')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      component: notFound
    },
    {
      path: '/',
      component: showBlogs
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/blog/:id',
      component: singleBlog
    },
    {
      path: '/category/:category',
      component: searchCategory
    },
    {
      path: '/changeblog/:changeblog',
      component: changeBlog
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/myPosts',
      name: 'myPosts',
      component: myPosts
    },
    {
      path: '/authUser',
      name: 'authUser',
      component: authUser
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/blog',
      name: 'showBlogs',
      component: showBlogs
    },
    {
      path: '/add',
      component: addBlog
    }
  ]
})

export default router
