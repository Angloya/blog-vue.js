<template>
  <div id="previewBlog">
    <div id="preview">
      <h1 class="previewh1">Preview Blog</h1>
      <h1>{{blog.title | to-uppercase}}</h1>
      <p>{{blog.content}}</p>
      <img :src='blog.image' class="blog_image" alt="">
      <h2>Categories:</h2>
      <ul class="blog_category">
        <li v-for="(category, idx) in blog.categories"
          :key="idx">{{category}}</li>
      </ul>
      <h2 class="blog_author">Author: {{blog.author}}</h2>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  computed: {
    blog () {
      return this.$store.state.blog
    },
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style>
.blog_image {
  max-height: 500px;
  max-width: 500px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
#previewBlog {
  width: 600px;
  min-width: 300px;
  padding-right: 5%
}
.previewh1 {
  border: 1px solid black;
  padding: 10px;
}
h1 {
  text-align: center
}
h2 {
  font-weight: 500;
}
p {
  text-align: justify;
  font-size: 22px
}
.blog_image {
  display: block;
  margin: 0 auto;
}
.blog_category {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start
}
.blog_category li {
  margin-right: 20px;
  border: 1px solid black;
  padding: 7px;
  list-style-type: none
}
.blog_author {
  text-align:right
}
@media only screen and (max-width: 600px) {
  .blog_image {
    max-height: 300px;
    max-width: 300px;
  }
  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
    background-color: rgba(237, 243, 243, 0.8)
  }
  p {
    text-align: justify;
    font-size: 18px
  }
  #previewBlog {
    width: 100%;
    min-width: 300px;
    padding-right: 5%
  }
}
</style>
