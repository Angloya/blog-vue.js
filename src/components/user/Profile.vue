<template>
  <div class="profile">
      <h2>Hello</h2>
      <h1>{{ user.name }}</h1>
      <h2 ><b>Email :</b> {{ user.email }}</h2>
  <form @submit.prevent="updateProfile">
      <h2>Update Profile</h2>
      <input v-model="displayName" placeholder="Your name">
      <button>Update</button>
    </form>
    <router-link :to="'myPosts/'">
        <button class="myPosts">my posts</button>
    </router-link>
  </div>

</template>

<script>
export default {
  data () {
    return {
      displayName: ''
    }
  },
  methods: {
    updateProfile () {
      if (this.displayName !== '') {
        this.$store.dispatch('updateProfile', {displayName: this.displayName})
      } else {
        alert('Введите имя')
      }
    }
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

<style scoped>
h2 {
  text-align: center
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
.myPosts {
  font-size: 30px;
  padding: 10px 20px;
}
</style>
