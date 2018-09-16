<template>
  <nav>
    <ul>
      <li><router-link to="/home" exact>Home</router-link></li>
      <li><router-link  to="/blog" exact>Blog</router-link></li>
      <li><router-link to="/add" exact>Add a New Blog</router-link></li>
       <li><router-link to="/Profile" exact>profile</router-link></li>
       <li class="userMail"><logout/></li>
       <li class="userMail">{{user.email}}</li>
    </ul>
  </nav>
</template>

<script>
import logout from '../../components/user/logout.vue'
export default {
  components: {
    logout
  },
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
    font-size: 20px;
}
.userMail {
color: #fff;
float: right;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>
