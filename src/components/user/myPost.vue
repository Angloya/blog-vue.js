<template>
  <div id="show-blogs" class="show-blogs">
       <div class="loading">
        <img v-if='loading' class="loading" src="../../assets/loader.gif">
        </div>
        <h1>my Posts</h1>
    <div v-for="blog in filteredBlogs"
      :key="blog.id"
      v-if='!loading'
      class="single-blog">
        <h2 v-rainbow @click="blogRouter(blog.id)">{{blog.title | to-uppercase}}</h2>
      <article @click="blogRouter(blog.id)">{{blog.content | snippet}}</article>
           <div class="Image">
      <img :src='blog.image' class="blogImage">
      </div>
      <div class="category">
       <ul v-for="(category, index) in blog.categories" :key="index">
      <li @click="categoryRouter(category)">{{category}}</li>
      </ul>
      </div>
      <p>{{blog.author | to-uppercase}}</p>
      </div>
  </div>
</template>

<script>
import userPost from '../../mixins/userPost'
export default {
  data () {
    return {
      search: ''
    }
  },
  computed: {
    blogs () {
      return this.$store.state.blogs
    },
    user () {
      return this.$store.state.user
    },
    loading () {
      return this.$store.state.loading
    }
  },
  created () {
    this.$store.dispatch('showBlog')
  },
  directives: {
    'rainbow': {
      bind (el, binding, vnode) {
        el.style.color = '#' + Math.random().toString().slice(2, 8)
      }
    }
  },
  methods: {
    categoryRouter (category) {
      this.$router.push('/category/' + category)
    },
    blogRouter (id) {
      this.$router.push('/blog/' + id)
    }
  },
  mixins: [userPost]
}
</script>

<style scoped>
.Image {
  padding-top: 20px;
}
.blog_author {
  text-align:right
}
</style>
