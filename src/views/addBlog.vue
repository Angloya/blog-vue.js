<template>
<div>
    <div v-if='!submitted' class="addBlog">
        <div class="blogEdit">
            <div>
                <addBlogText id="addBlogText" />
            </div>
            <div>
                <addBlogPreview id="addBlogPreview" />
                <addBlogSend id="addBlogSend" />
            </div>
        </div>
    </div>
    <div v-else class="addBlog afterAddBlog">
        <afterAddBlog message="Thanks for adding post" />
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
  justify-content: center
  }
#addBlogText{
  width: 500px;
  padding-left: 150px;
  }
#addBlogPreview{
  padding-right: 150px;
  padding-left: 150px;
  width: 600px;
  }
#addBlogSend {
  text-align: center;
  margin-right: 150px;
}
@media only screen and (max-width: 600px) {
  .blogEdit {
    display: flex;
    align-items: center ;
    flex-direction: column;
    background-color: rgba(237, 243, 243, 0.4);
  }
  #addBlogText{
    width: 100%;
    padding-left: 0px;
  }
  #addBlogPreview{
    width: 100%;
     padding-right: 0px;
     padding-left: 0px;
  }
  #addBlogSend {
    text-align: center;
  }
  .addBlog {
    height: 100%;
    width: 100%;
    padding-bottom: 5px;
    background-image: url('../assets/background3.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .afterAddBlog {
    margin-top: -40px;
    background-color: rgba(237, 243, 243, 0.7)
  }
  .previewh1 {
    background-color: rgba(237, 243, 243, 0.7)
  }
  #addBlogSend {
    margin-right: 0px;
  }
}
</style>
