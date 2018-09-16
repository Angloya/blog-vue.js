<template>
<div class="authUser">
  <div class="auth">
<signin class="signin"/>
<signup class="signup"/>
</div>
<loginWithGoogle class="loginWithGoogle"/>
</div>
</template>

<script>
import signin from '../components/user/Signin.vue'
import signup from '../components/user/Signup.vue'
import loginWithGoogle from '../components/user/loginWithGoogle.vue'

export default {
  name: 'authUser',
  components: {
    signin,
    signup,
    loginWithGoogle

  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style scoped>
.authUser {
  min-height: 100vh;
  padding-top:50px;
  display: flex;
    justify-content: flex-start;
  align-items: center;
  flex-direction: column
}
.auth{
    display: flex;
  justify-content: center;
  align-items: baseline;
}
.signin {
  padding-right: 50px;
}
.signup {
  padding-left: 50px;
}
</style>
