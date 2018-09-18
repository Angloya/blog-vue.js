<template>
  <div id="show-blogs" class="searchBlog">
    <h1>{{category}}</h1>
    <div :class="{'show-blogs-column': this.row}">
      <div v-for="blog in filterBlogs" :key="blog.id" class="single-blog">
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
    },
    row () {
      return this.$store.state.row
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
#show-blogs {
  margin-top: 0px
}
@media only screen and (max-width: 600px) {
  #show-blogs {
    margin-top: -80px
  }
}
</style>
