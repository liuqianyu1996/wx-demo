// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import { fetchGet } from '@/utils/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    setMovies: (state, val) => {
        state.movies = val;
    }
  },
  actions: {
      getMovies: ({ commit }, param) => {
        wx.showLoading({
            title: '数据加载中'
        })
        fetchGet('/in_theaters').then(res => {
            console.log(res.data);
            commit('setMovies', res.data)
            wx.hideLoading()
        })
      }
  }
})

export default store
