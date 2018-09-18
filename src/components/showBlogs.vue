<template>
<div id="show-blogs">
  <div class="loading">
    <img v-if='loading' class="loading" src="../assets/loader.gif">
  </div>
  <div v-if='!loading' class="show-blog">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
  </div>
  <div class="show-blogs" v-if='!loading'>
    <div :class="{'show-blogs-column': this.row}">
      <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
        <h2 @click="blogRouter(blog.id)" v-rainbow>{{blog.title | to-uppercase}}</h2>
        <article @click="blogRouter(blog.id)">{{blog.content | snippet}}</article>
        <div class="Image">
          <img :src='blog.image' class="blogImage">
        </div>
          <div class="category">
            <ul v-for="(category, index) in blog.categories" :key="index">
              <li @click="categoryRouter(category)">{{category}}</li>
            </ul>
          </div>
          <p class="blog_author">{{blog.author | to-uppercase}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'
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
      return this.$store.getters.user
    },
    row () {
      return this.$store.state.row
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
      this.$router.push('blog/' + id)
    }
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
.show-blog input {
  max-width: 500px;
  padding: 10px;
  min-width: 300px;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  background-color: rgba(173, 173, 173, 0.9)
}
@media only screen and (max-width: 600px) {
  .show-blog input {
    max-width: 250px;
    min-width: 200px;
  }
    h1{
    margin-top: 0px;
  }
  .loading {
    margin-top: -50px
  }
}
</style>
