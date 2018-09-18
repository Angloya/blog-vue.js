<template>
  <div id="add-blog" class="add-blog" @click="showPreview">
    <h1 class="previewh1">Add a New Blog Post</h1>
    <form>
      <label for="blogTitle">Blog Title:</label>
      <input
        type="text"
        v-model.lazy="title"
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
        v-model.lazy="blog.content"
        id="blogContent">
      </textarea>
      <div id="checkboxes" v-for="(category, index) in blog.categories" :key="index">
        <label>{{category}}</label>
        <input type="checkbox"
          :value='category'
          v-model="blog.categories"/>
      </div>
      <button v-if='!addCat' @click="addCat = !addCat">add categoties</button>
      <input v-if='addCat'
        type="text"
        required
        v-model="newCategory">
      <button v-if='addCat' @click="addCategoties">save</button>
      <button v-if='addCat' @click="addCat = !addCat">close</button>
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
        categories: ['no category'],
        image: ''
      },
      newCategory: '',
      addCat: false,
      title: ''
    }
  },
  components: {
    PictureInput
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    showPreview () {
      if (this.user.name !== undefined && this.user.name !== null) {
        this.blog.author = this.user.name
        this.blog.idx = this.user.id
        this.blog.title = this.title.toLowerCase()
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
    },
    addCategoties () {
      this.blog.categories.push(this.newCategory.toLowerCase())
      this.addCat = false
      this.newCategory = ''
    }
  }
}
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
.add-blog button {
  padding: 10px;
  outline: none;
  font-size: 20px;
  border-radius: 8px;
  background-color: rgba(255, 198, 190, 0.4);
  margin-right: 10px;
}
.add-blog button:hover {
  transition: .5s linear;
  background-color: rgba(255, 250, 249, 0.8)
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
  font-size: 25px;
}
textarea {
  min-height: 200px;;
}
input[type="text"], textarea {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  background-color: rgba(255, 198, 190, 0.4)
}
textarea::-webkit-scrollbar {
  width: 3px;
  background: #000000;
}
textarea::-webkit-scrollbar-thumb:vertical {
  width: 3px;
  background: #ffffff;
}
textarea::-webkit-scrollbar-thumb:horizontal  {
  display: none;
  background: #ffffff;
}
textarea::-webkit-scrollbar:horizontal {
  width: 0px;
  display: none;
  background: #000000;
}
#checkboxes input{
  display: inline-block;
  margin-right: 0px;
}
#checkboxes label{
  display: inline-block;
  margin-right: -90px;
}
@media only screen and (max-width: 600px) {
  #add-blog {
    margin: 20px auto;
    width: 100%;
  }
  textarea {
    min-height: 200px;
  }
  input[type="text"], textarea {
    display: block;
    width: 250px;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: 'Open Sans Condensed', sans-serif;
    background-color: rgba(255, 198, 190, 0.4)
  }
  #checkboxes label {
    display: inline-block;
    margin-right: -30px;
  }
}
</style>
