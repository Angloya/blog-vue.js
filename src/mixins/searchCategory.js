export default {
  computed: {
    filterBlogs () {
      return this.blogs.filter((blog) => {
        if (blog.categories !== undefined) {
          return blog.categories.includes(this.category)
        } else {
          return console.log('none')
        }
      })
    }
  }
}
