<template>
<div>
    <img v-if='loading' src="../assets/loader.gif">
    <div v-if='!loading'>
    <div v-if='!submitted' class="addBlog">
      <div class="blogEdit">
        <div>
    <changeBlogText id="addBlogText"/>
    </div>
    <div>
<addBlogPreview id="addBlogPreview"/>
    </div>
      </div>
    <changeSend id="addBlogSend"/>
    </div>
    <div v-if="submitted" class="afterAddBlog">
 <afterAddBlog message="Thank you for editing your post"/>
    </div>
    </div>
</div>
</template>

<script>
import changeBlogText from '@/components/ChangeBlog/changeBlogText.vue'
import addBlogPreview from '@/components/addBlog/addBlogPreview.vue'
import changeSend from '@/components/ChangeBlog/changeBlogSend.vue'
import afterAddBlog from '@/components/addBlog/afterAddBlog.vue'

export default {
  name: 'AddBlog',
  components: {
    changeBlogText,
    addBlogPreview,
    changeSend,
    afterAddBlog
  },
  computed: {
    submitted () {
      return this.$store.state.submitted
    },
    loading () {
      return this.$store.state.loading
    }
  }
}
</script>

<style scoped>
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

</style>
