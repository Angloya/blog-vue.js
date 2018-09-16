<template>
  <div id="show-blogs">
    <h1>{{category}}</h1>
    <div v-for="blog in filterBlogs"
      :key="blog.id"
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
import searchCategory from '../mixins/searchCategory'
export default {
  data () {
    return {
      category: this.$route.params.category
    }
  },
  computed: {
    blogs () {
      return this.$store.state.blogs
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
  mixins: [searchCategory]
}
</script>

<style scoped>
.Image {
  padding-top: 20px;
}
a {
  text-decoration: none
}

</style>
