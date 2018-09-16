<template>
  <div id="add-blog">
    <button @click="post">Send post</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      id: this.$route.params.changeblog
    }
  },
  computed: {
    blog () {
      return this.$store.state.blog
    }
  },
  methods: {
    post () {
      if (this.blog.title !== undefined) {
        this.$store.dispatch('changePost', this.id)
      } else {
        alert('Сначала введите название')
      }
    }
  }
}
</script>
