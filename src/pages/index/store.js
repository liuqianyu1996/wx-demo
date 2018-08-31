// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import { fetchGet } from '@/utils/api'
import { resolve } from 'url';
import { rejects } from 'assert';

Vue.use(Vuex)

const moviesPath =  [
  { key: 'in_theaters' },
  { key: 'coming_soon' },
  { key: 'new_movies' },
  { key: 'top250' }
]

const store = new Vuex.Store({
  state: {
    movies: [],
    loaded: false
  },
  mutations: {
    setMovies: (state, val) => {
        state.movies = val;
    },
    setLoaded: (state, val) => {
      state.loaded = val;
    }
  },
  actions: {
      getMovies: ({ commit }) => {
        wx.showLoading({ title: '数据加载中' })
        const tasks = moviesPath.map( path => {
          return fetchGet(path.key).then(res => {
            res.title = res.data.title;
            res.move = res.data.subjects;
            return res;
          })
        })
        Promise.all(tasks).then(res => {
            console.log(res);
            commit('setMovies', res)
            commit('setLoaded', true)
            wx.hideLoading()
        })
      }
  }
})

export default store
