<template>
  <div id="add-blog">
    <button @click="post">Send post</button>
  </div>
</template>

<script>

export default {
  computed: {
    blog () {
      return this.$store.state.blog
    }
  },
  methods: {
    post () {
      if (this.blog.title !== undefined) {
        this.$store.dispatch('post')
      } else {
        alert('Сначала введите название')
      }
    }
  }
}
</script>

 <style>
 #addBlogSend button {
  padding: 10px;
  outline: none;
  font-size: 25px;
  border-radius: 8px;
  background-color: rgba(255, 198, 190, 0.4);
  margin-right: 10px;
}
#addBlogSend button:hover {
   transition: .5s linear;
   background-color: rgba(255, 250, 249, 0.8)
}

 </style>
