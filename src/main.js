import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import * as firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(VueResource)

// custom directives
window.onload = new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB9A-GCVY3zKUJKRXroe8h5wuYdDSw2ylQ',
      authDomain: 'blogvuejs-ed9af.firebaseapp.com',
      databaseURL: 'https://blogvuejs-ed9af.firebaseio.com',
      projectId: 'blogvuejs-ed9af',
      storageBucket: 'blogvuejs-ed9af.appspot.com',
      messagingSenderId: '700880399834'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
}).$mount('#app')

Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '560px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#ddd'
      el.style.padding = '20px'
    }
  }
})

// filters

Vue.filter('snippet', value => {
  return value.slice(0, 200) + '...'
})
Vue.filter('toUppercase', value => {
  if (value !== undefined) {
    return value.toUpperCase()
  } else {
    return value
  }
})
Vue.filter('toLowerCase', value => {
  return value.toLowerCase()
})
