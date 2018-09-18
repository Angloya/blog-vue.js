<template>
<div id="single-blog">
    <img v-if='loading' class="loading" src="../assets/loader.gif">
    <div v-if='!loading' id="single">
        <h1>{{isTitle}}</h1>
        <article>{{blog.content}}</article>
        <div class="Image">
            <img :src='blog.image' class="blogImage">
        </div>
        <div class="category">
            <ul v-for="(category, index) in blog.categories" :key="index">
                <li @click="categoryRouter(category)">{{category}}</li>
            </ul>
        </div>
        <p>{{blog.author}}</p>
        <p> Если вы являетесь автором данного блога, то вы можете отредактировать его
            <img @click="changeBlog" class="changeblog" src="../assets/change.png">
        </p>
        <span v-if="showChange">Вы не являетесь автором данного блога</span>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      title: '',
      showChange: false
    }
  },
  computed: {
    blog () {
      return this.$store.state.blog
    },
    user () {
      return this.$store.state.user
    },
    loading () {
      return this.$store.state.loading
    },
    isTitle () {
      if (this.blog.title !== undefined) {
        return this.blog.title.toUpperCase()
      } else {
        return this.blog.title
      }
    }
  },
  watch: {
    blog () {
      return this.$store.state.blog
    }
  },
  created () {
    this.$store.dispatch('showSingleBlog', this.id)
  },
  methods: {
    categoryRouter (category) {
      this.$router.push('/category/' + category)
    },
    changeBlog () {
      if (this.user) {
        if (this.blog.idx === this.user.id) {
          this.$router.push('/changeblog/' + this.id)
        } else {
          this.showChange = true
        }
      }
    }
  }
}
</script>

<style scoped>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 20px;
  background-color: rgba(247, 238, 238, 0.9)
}
#single{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.blogImage {
  max-width: 800px;
  max-height: 800px;
  padding-bottom: 30px;
}
p {
  align-self: flex-end
}
.category {
  align-self: flex-start
}
article {
  padding-top: 30px;
  padding-bottom: 20px;
}
.changeblog {
  margin-bottom: -5px
}
@media only screen and (max-width: 600px) {
  #single-blog{
    max-width: 100%;
    margin: 0 auto;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 20px;
    background-color: rgba(247, 238, 238, 0.9);
    margin-top: -40px;
  }
  #single{
    display: flex;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .blogImage {
    max-width: 300px;
    max-height: 300px;
    padding-bottom: 30px;
  }
}
</style>
