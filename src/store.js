import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blog: {},
    submitted: false,
    blogs: [],
    user: null,
    loading: false,
    error: null,
    row: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    blog (state, blog) {
      state.blog = blog
    },
    row (state, row) {
      state.row = row
    },
    blogs (state, blogs) {
      state.blogs = blogs
    },
    submitted (state, bool) {
      state.submitted = bool
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  getters: {
    blog (state) {
      return state.blog
    },
    blogs (state) {
      return state.blogs
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  },
  actions: {
    showPreview (context, blog) {
      context.commit('blog', blog)
    },
    newPost (context) {
      context.commit('submitted', false)
      context.commit('blog', {})
    },
    post (context) {
      Vue.http.post('https://blogvuejs-ed9af.firebaseio.com/posts.json', this.getters.blog
      ).then(() => {
      })
      context.commit('submitted', true)
    },
    changePost (context, id) {
      context.commit('setLoading', true)
      var updates = {}
      updates['/posts/' + id] = this.getters.blog
      context.commit('submitted', true)
      context.commit('setLoading', false)
      return firebase.database().ref().update(updates)
    },
    showBlog (context) {
      context.commit('setLoading', true)
      Vue.http.get('https://blogvuejs-ed9af.firebaseio.com/posts.json').then(data => {
        return data.json()
      }).then(function (data) {
        var blogsArray = []
        for (let key in data) {
          data[key].id = key
          blogsArray.push(data[key])
        }
        context.commit('blogs', blogsArray)
        context.commit('submitted', false)
        context.commit('setLoading', false)
      })
    },
    isRow (context) {
      context.commit('row', true)
    },
    isColumn (context) {
      context.commit('row', false)
    },
    showSingleBlog (context, id) {
      context.commit('setLoading', true)
      Vue.http.get('https://blogvuejs-ed9af.firebaseio.com/posts/' + id + '.json').then(data => {
        context.commit('blog', data.body)
        context.commit('submitted', false)
      })
      context.commit('setLoading', false)
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              name: user.displayName,
              email: user.email
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              name: user.displayName,
              email: user.email
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserInGoogle ({commit}) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              name: user.displayName,
              email: user.email
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setLoading', true)
      commit('setUser', {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email
      })
      commit('setLoading', false)
    },
    logout (context) {
      firebase.auth().signOut()
      context.commit('setUser', null)
      window.location.reload()
    },
    updateProfile (context, user) {
      context.commit('setLoading', true)
      if (firebase.auth().currentUser) {
        firebase.auth().currentUser.updateProfile({
          displayName: user.displayName
        }).then(() => {
          // Update successful
          console.log('successful')
          window.location.reload()
        })
          .catch(
            error => {
              context.commit('setLoading', false)
              context.commit('setError', error)
              console.log(error)
            }
          )
      }
      context.commit('setLoading', false)
    },
    resetPasswordWithEmail ({ commit }, payload) {
      const { email } = payload
      commit('setLoading', true)
      firebase.auth().sendPasswordResetEmail(email)
        .then(
          () => {
            commit('setLoading', false)
            console.log('Email Sent')
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          })
    }
  }
})
