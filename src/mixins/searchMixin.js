export default {
  computed: {
    filteredBlogs () {
      return this.blogs.filter((blog) => {
        if (blog.categories !== undefined) {
          return blog.title.match(this.search.toLowerCase()) || blog.author.match(this.search.toLowerCase()) || blog.categories.includes(this.search.toLowerCase())
        } else {
          return blog.title.match(this.search.toLowerCase()) || blog.author.match(this.search.toLowerCase())
        }
      })
    }
  }
}
