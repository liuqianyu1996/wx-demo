// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import { fetchGetData } from '@/utils/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    move: {},
    loaded: false
  },
  mutations: {
    setMove: (state, val) => {
        state.movies = val;
    },
    setLoaded: (state, val) => {
      state.loaded = val;
    }
  },
  actions: {
      getMove: ({ commit }, id) => {
        wx.showLoading({ title: '数据加载中' })
        fetchGetData(`subject/${id}`).then(res => {
          commit('setMove', res.data)
          console.log('setMove', state.move)
          commit('setLoaded', true)
          wx.hideLoading();
          wx.setNavigationBarTitle({ title: `豆瓣电影 • ${res.data.title}` })
        })
      }
  }
})

export default store
