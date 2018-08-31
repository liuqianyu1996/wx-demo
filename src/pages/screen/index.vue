<template>
  <div class="screen-warp">
    <swiper indicator-dots="true">
      <swiper-item v-for="(item, index) in movies" :key="index">
        <image :src="item.images.large" class="slide-image" mode="aspectFill" v-if="item.images"/>
        <navigator open-type="switchTab" url="../../pages/index/main">
          <button class="start" @click="handleStart" v-if="index == movies.length - 1">前往首页</button>
        </navigator>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import { fetchGet } from '@/utils/api'

export default {
  data: {
    movies: [
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519726014.jpg',
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518645794.jpg',
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.jpg',
    ]
  },
  computed: {

  },
  methods: {
    setCache () {
       fetchGet('/coming_soon', 1, 3).then(res => {
        wx.setStorage({
          key: 'screen-img',
          data: {
            movies: res.data.subjects,
            expires: Date.now() + 1 * 24 * 60 * 60 * 1000
          }
        })
        this.movies = res.data.subjects;
      })
    },
    getCache () {
      wx.showLoading({ title: '加载中' })
      return new Promise(resolve => {
        const that = this;
        wx.getStorage({
          key: 'screen-img',
          success: function(res){
            const { movies, expires } = res.data;
            movies && expires > Date.now() ? that.setCache() : null;
            wx.hideLoading()
          },
          fail: function() {
           that.setCache();
            wx.hideLoading()
          }
        })
      })
    }
  },
  onLoad () {
    this.getCache();
  }
}
</script>

<style>
page {
  height: 100%;
  width: 100%;
  position: relative;
}
.screen-warp {
  width: 100%;
  height: 100%;;
}
swiper {
  height: 100%;
}
swiper image {
  width: 100%;
  height: 100%;
}
button {
  width: 220rpx;
  height: 80rpx;
  margin: 0 auto;
  position: absolute;
  bottom: 100rpx;
  left: 50%;
  color: #fff;
  font-size: 30rpx;
  line-height: 80rpx;
  margin-left: -110rpx;
  background: rgba(0, 0, 0, .5);
  border-radius: 50rpx;
}
</style>
