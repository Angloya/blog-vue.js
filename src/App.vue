<template>
  <div id="app">
    <app-header v-if="show" class="header"/>
    <headerAuth v-if="!show" class="header"/>
    <router-view class="main">
    </router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import headerAuth from './components/header/headerAuth.vue'

export default {
  data () {
    return {
      show: true
    }
  },
  components: {
    'app-header': header,
    headerAuth
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.show = false
      } else {
        this.$router.push('*')
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300i,700&subset=cyrillic');
body  {
  margin: 0;
  font-family: 'Open Sans Condensed', sans-serif;
  height: 100%;
}
body::-webkit-scrollbar {
    width: 7px;
    background: #000000;
}
body::-webkit-scrollbar-thumb:vertical {
    width: 7px;
    background: #ffffff;
}
body::-webkit-scrollbar-thumb:horizontal  {
   display: none;
    background: #ffffff;
}
body::-webkit-scrollbar:horizontal {
    width: 0px;
    display: none;
    background: #000000;
}
button {
  font-family: 'Open Sans Condensed', sans-serif;
  cursor: pointer
}
#app {
  height: 100%;
  background-image: url('./assets/background2.jpg') ;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
}
.header{
position: sticky;
top: 0;
z-index: 10
}
h2 {
font-weight: normal
}
input{
  display: block;
  padding: 10px;
  min-width: 200px;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: 'Open Sans Condensed', sans-serif;
  background-color: rgba(173, 173, 173, 0.9)
}
::-webkit-input-placeholder {
  color: #ffffff
}
button {
  padding: 10px;
  outline: none;
  font-size: 25px;
  border-radius: 8px;
  background-color: rgba(158, 150, 149, 0.4);
  margin-right: 10px;
}
button:hover {
   transition: .5s linear;
   background-color: rgba(255, 250, 249, 0.8)
}
#show-blogs {
  height: 100%;
  min-height: 100vh;
  min-width: 800px;
  margin-top: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.show-blogs {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}
.Image {
  align-self: center;
  padding-top: 20px;
}
.show-blogs a {
 font-size: 25px;
 text-decoration: none
}
article {
  font-size: 22px;
  margin-top: -20px;
  text-indent: 20px;
  text-align: justify
}
.loading {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center
}
#show-blogs a{
  cursor: pointer;
  align-self: center;
  color: black
}
.single-blog{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: rgba(247, 238, 238, 0.774);
  width: 800px;
  border: 1px solid black
}
.single-blog h2{
  font-size: 30px
}
.blogImage {
  max-height: 500px;
  max-width: 500px;
}
.category li{
  margin-right: 20px;
  border: 1px solid black;
  padding: 7px;
  list-style-type: none;
  background-color: rgba(248, 244, 244, 0.6);
  font-size: 20px;
  margin-right: -20px;
  cursor: pointer
}
.category li:hover {
   transition: .5s linear;
   background-color: rgba(255, 250, 249, 0.8)
}
.category{
  display: flex;
}
.category a {
  text-decoration: none;
  color: black
}
.blog_author {
  text-align:right
}
</style>
