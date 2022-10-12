import Vue from 'vue'
import Vuex from 'vuex'
import About from './modules/about'
import Login from './modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { count: 0 },
  getters: {},
  mutations: {
    setTambah(state) {
      state.count++
    },
    setKurang(state) {
      state.count--
    },
    setReset(state) {
      state.count = 0
    },
    setCount(state, payload) {
      state.count = payload
    },
  },
  actions: {
    tambah(context) {
      context.commit('setTambah')
    },
    kurang(context) {
      context.commit('setKurang')
    },
    reset(context) {
      context.commit('setReset')
    },
    increment(context, payload) {
      context.commit('setCount', payload)
    },
  },
  modules: {
    moduleAbout: About,
    moduleLogin: Login,
  },
})
