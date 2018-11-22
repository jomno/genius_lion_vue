import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { config } from '@/helpers/firebaseConfig'


Vue.use(Vuex)

if (!firebase.apps.length) {
    firebase.initializeApp({});
}

const state = {
  user: null,
  loading: false,
  error: null
}

const getters = {
  user (state) {
    return state.user
  },
  loading (state) {
    return state.loading
  },
  error (state) {
    return state.error
  }
}

const mutations = {
  setUser (state, payload) {
    state.user = payload
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
}

const actions = {
  clearError ({commit}) {
    commit('clearError')
  },
  setError ({commit}, payload) {
    commit('setError', payload)
  },
  signUserInGoogle ({commit}) {
    commit('setLoading', true)
    commit('clearError')
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.user.uid,
            name: user.user.displayName,
            email: user.user.email,
            photoUrl: user.user.photoURL
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
    commit('setUser', {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL
    })
  },
  logout ({commit}) {
    firebase.auth().signOut()
    commit('setUser', null)
  }
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
