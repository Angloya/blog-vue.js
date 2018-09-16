<template>
<div>
    <div v-if='!submitted' class="addBlog">
      <div class="blogEdit">
        <div>
    <addBlogText id="addBlogText"/>
    </div>
    <div>
<addBlogPreview id="addBlogPreview"/>
    <addBlogSend id="addBlogSend"/>
    </div>
    </div>
    </div>
    <div v-else class="addBlog afterAddBlog">
 <afterAddBlog message="Thanks for adding post"/>
    </div>
</div>
</template>

<script>
import addBlogText from '@/components/addBlog/addBlogText.vue'
import addBlogPreview from '@/components/addBlog/addBlogPreview.vue'
import addBlogSend from '@/components/addBlog/addBlogSend.vue'
import afterAddBlog from '@/components/addBlog/afterAddBlog.vue'

export default {
  name: 'AddBlog',
  components: {
    addBlogText,
    addBlogPreview,
    addBlogSend,
    afterAddBlog
  },
  computed: {
    submitted () {
      return this.$store.state.submitted
    }
  }
}
</script>

<style>
  .addBlog {
  height: 100%;
  padding-bottom: 5px;
  background-image: url('../assets/background3.jpg');
  background-size: cover;
  background-position: center -350px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin-top: -40px;
  }
  .blogEdit {
    display: flex;
    justify-content:space-around;
    align-items: flex-start ;
  }
 #addBlogText{
    width: 500px;
    padding-left: 150px;
  }
  #addBlogPreview{
    padding-right: 150px;
    width: 600px;
  }
  #addBlogSend {
    text-align: center;
    margin-right: 150px;
}
</style>
