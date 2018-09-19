<template>
  <nav>
    <ul>
      <li><router-link to="/home" exact>Home</router-link></li>
      <li><router-link  to="/blog" exact>Blog</router-link></li>
      <li><router-link to="/add" exact>Add a New Blog</router-link></li>
      <li><router-link to="/Profile" exact>Profile</router-link></li>
      <li class="logout"><logout/></li>
      <li class="userMail">{{user.email}}</li>
      <img src="../../assets/row.png" @click="isColumn" v-if="this.row">
      <img src="../../assets/column.png" @click="isRow" v-if="!this.row">
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
    },
    row () {
      return this.$store.state.row
    }
  },
  methods: {
    isColumn () {
      this.$store.dispatch('isColumn')
    },
    isRow () {
      this.$store.dispatch('isRow')
    }
  }
}
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
  margin-bottom: -8px;
  cursor: pointer;
  float:right
}
ul {
  list-style-type: none;
  text-align: center;
  margin: 5px;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: 20px;
}
.userMail {
  color: #fff;
  float: right;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
.logout {
  color: #fff;
  float: right;
}
nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
  padding-left: 20px;
}
.router-link-active{
  background: #eee;
  color: #444;
}
@media only screen and (max-width: 600px) {
  li {
    display: inline-block;
    margin: 0 0px;
    font-size: 17px;
  }
  ul {
      list-style-type: none;
      text-align: left;
      margin-left: -40px;
  }
  .userMail {
    display: none;
  }
  .logout {
    padding-left: 3px;
  }
  img {
    display: none
  }
}
</style>
