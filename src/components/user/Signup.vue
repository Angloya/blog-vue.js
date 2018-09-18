<template>
<div class="onSignup">
  <form @submit.prevent="onSignup">
    <h2>Регистрация:</h2>
    <input
      name="email"
      label="Email"
      id="email"
      v-model="email"
      type="email"
      placeholder="Enter email"
      required>
    <input
      name="password"
      id="password"
      v-model="password"
      type="password"
      placeholder="Enter password"
      required>
      <input
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm Password"
        id="confirmPassword"
        v-model="confirmPassword"
        type="password"
        :rules="[comparePasswords]">
      <button>Регистрация</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/profile')
      }
    }
  },
  methods: {
    onSignup () {
      debugger
      if (this.comparePasswords === '') {
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      } else {
        alert('Passwords do not match')
      }
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
}
form h2 {
  align-self: flex-start
}
.onSignup {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
