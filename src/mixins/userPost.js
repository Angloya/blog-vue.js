
export default {
  computed: {
    filteredBlogs () {
      return this.blogs.filter((blog) => {
        if (blog.idx !== undefined) {
          return blog.idx.match(this.user.id)
        } else {
          return blog.idx.match(this.user.id)
        }
      })
    }
  }
}
