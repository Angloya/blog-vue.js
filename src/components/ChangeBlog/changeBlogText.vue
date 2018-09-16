<template>
  <div id="add-blog" @click="showPreview">
    <h1 class="previewh1">Change Blog Post</h1>
    <form>
      <label for="blogTitle">Blog Title:</label>
      <input
        type="text"
        v-model.lazy="blogs.title"
        id="blogTitle"
        required/>
         <div class="hello">
    <picture-input
      ref="pictureInput"
      width="500"
      height="500"
      margin="16"
      accept="image/jpeg,image/png"
      :removable="true"
      size="10"
      button-class="btn"
      :custom-strings="{
        upload: '<h1>upload!</h1>',
        drag: 'Drag a image'
      }"
      @remove="onRemoved"
      @change="onChange">
    </picture-input>
  </div>
      <label for="blogContent">Blog Content:</label>
      <textarea
        v-model.lazy="blogs.content"
        id="blogContent">
      </textarea>
    </form>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'

export default {
  data () {
    return {
      blog: {
        title: '',
        content: '',
        image: ''
      },
      title: '',
      id: this.$route.params.changeblog
    }
  },
  components: {
    PictureInput
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    blogs () {
      return this.$store.state.blog
    }
  },
  created () {
    this.$store.dispatch('showSingleBlog', this.id)
  },
  methods: {
    showPreview () {
      if (this.user.name !== undefined && this.user.name !== null) {
        this.blog.author = this.user.name
        this.blog.idx = this.user.id
        this.blog.title = this.blogs.title.toLowerCase()
        this.blog = this.blogs
        this.$store.dispatch('showPreview', this.blog)
      } else {
        this.blog.author = this.user.email
        this.blog.title = this.title.toLowerCase()
        this.$store.dispatch('showPreview', this.blog)
      }
    },
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.blog.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    onRemoved () {
      this.blog.image = ''
    }
  }
}
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
</style>
