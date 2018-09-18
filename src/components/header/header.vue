<template>
  <nav>
    <ul>
      <li><router-link to="/home" exact>Home</router-link></li>
      <li><router-link  to="/blog" exact>Blog</router-link></li>
      <li><router-link to="/authUser" exact>login</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: 20px;
  padding: 10px 10px;
}
a{
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px 10px;
}
nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active {
  background: #eee;
  color: #444;
}
@media only screen and (max-width: 600px) {
  nav {
    margin-bottom: 0px;
  }
  li {
    display: inline-block;
    margin: 0 5px;
    font-size: 20px;
    padding: 5px 10px;
  }
}
</style>
